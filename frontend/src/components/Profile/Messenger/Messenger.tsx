import React, { useState, useEffect, useRef, useMemo } from 'react';
import styles from './messenger.module.css';
import { useFindUserQuery, useGetChatsQuery, useGetMessagesQuery, useSendMessageMutation } from '../../../graphql/generated/output';
import { useCurrent } from '../../../hooks/useCurrent';
import { useLocation } from 'react-router-dom';

interface Message {
  senderId: string;
  content: string;
  sentAt: string;
  isEdited?: string;
  chatId: string;
}

interface User {
  id: string;
  name: string;
}

const CreateMessageComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const current = useCurrent();
  const { state } = useLocation(); // для того чтобы перенаправить на чат не реализовано
  
  // Получаем список чатов
  const { data: chatsData, refetch: refetchChats } = useGetChatsQuery();

  // Получаем сообщения
  const { data: messagesData, refetch: refetchMessages } = useGetMessagesQuery({
    variables: { data: selectedUser?.id?.toString() || '' },
    skip: !selectedUser?.id,
    onCompleted: (data) => {
      if (data?.getMessages) {
        setMessages(data.getMessages);
      }
    },
  });
  // Получаем юзера 
  const { data } = useFindUserQuery({ variables: { id: selectedUser?.id || '' } });
  const findUser = useMemo(() => data?.findUser, [])
  const downloadImage = () =>
  {

  }

  // Мутация для отправки сообщения
  const [sendMessageMutation] = useSendMessageMutation();

  const sendMessage = async () => {
    if (inputValue.trim() !== '' && selectedUser) { 
      try {
        const newMessage: Message = {
          content: inputValue.trim(),
          senderId: current.user?.id?.toString() || '',
          sentAt: new Date().toISOString(),
          chatId: selectedUser.id.toString(),
        };
        
        setMessages((prev) => [...prev, newMessage]); // Обновление локального состояния
        setInputValue(''); // Очистка поля ввода

        await sendMessageMutation({
          variables: { data: 
            { 
              chatId: selectedUser.id.toString() || '', 
              content: inputValue.trim() 
            } }
        });
        //console.log(messagesData);
        await refetchMessages(); // Перезагрузка сообщений
      } catch (error) {
        console.error('Ошибка отправки сообщения:', error);
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    setMessages([]); // Очистка сообщений при переключении чата
    refetchMessages(); // Обновление сообщений для выбранного пользователя
  };


  useEffect(() => {
    handleUserClick(state);
  }, [state, useLocation]);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);



  return (
    <div className={styles.appContainer}>
      <div className={styles.usersContainer}>
        <span className={styles.name_container}>Сообщения</span>
        <div className={styles.list_users}>
          {chatsData?.getChats?.map((chat) => {
            const userName = chat.user_1?.displayName === current.user?.displayName ? chat.user_2 : chat.user_1;
            //console.log(chat.user_1?.displayName, " ", chat.user_2?.displayName);
            return (
              <div
                key={chat.id}
                className={`${styles.userItem} ${selectedUser?.id.toString() === chat.id ? styles.selectedUser : ''}`}
                onClick={() =>
                  handleUserClick({
                    id: chat.id, // Привязываем ID чата
                    name: userName.displayName || 'Неизвестный пользователь',
                  })
                }
              >
                <div>{userName.displayName}</div>
                <div className={styles.lastMessage}>last message: {chat.lastMessage}</div>
                <div><img></img></div> someImage
              </div>
            );
          }
          )}
        </div>
      </div>
      <div className={styles.chat__container}>
        {selectedUser && (
          <div className={styles.chatHeader}>
            <img src={findUser?.avatar != null ? findUser.avatar : '/images/Profile/user.svg'} className={styles.avatar}/>
            <div className={styles.username}>{selectedUser.name}</div>
          </div>
        )}
        <div className={styles.chat__box} ref={chatBoxRef}>
          {messages.map((message, index) => (
            <div
              key={message.chatId}
              className={`${styles.message} ${message.senderId === current.user?.id ? styles.user : styles.other}`}
            >
              {message.content}
            </div>
          ))}
        </div>
        <div className={styles.input__container}>
          <img className={styles.logo__file__dw} src={ '/images/ImagesChat/paper-clip-dw-file.svg'} alt="avatar" 
            onClick={downloadImage}
          />
          <input
            type="text"
            placeholder="Введите сообщение..."
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={handleKeyDown}
          />
          <button onClick={sendMessage}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default CreateMessageComponent;
