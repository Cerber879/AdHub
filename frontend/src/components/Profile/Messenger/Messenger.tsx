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
  const { state } = useLocation(); 
  
  const { data: chatsData, refetch: refetchChats } = useGetChatsQuery();

  const { data: messagesData, refetch: refetchMessages } = useGetMessagesQuery({
    variables: { data: selectedUser?.id?.toString() || '' },
    skip: !selectedUser?.id,
    onCompleted: (data) => {
      if (data?.getMessages) {
        setMessages(data.getMessages);
      }
    },
  });
  const { data } = useFindUserQuery({ variables: { id: selectedUser?.id || '' } });

  const findUser = useMemo(() => data?.findUser, [])
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
        
        setMessages((prev) => [...prev, newMessage]);
        setInputValue(''); 

        await sendMessageMutation({
          variables: { data: 
            { 
              chatId: selectedUser.id.toString() || '', 
              content: inputValue.trim() 
            } }
        });
        await refetchMessages(); 
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
    setMessages([]);
    refetchMessages(); 
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
      <span className={styles.name}>Сообщения</span>
      <div className={styles.data_block}>
        <div className={styles.usersContainer}>
          {chatsData?.getChats?.map((chat) => {
            const userName = chat.user_1?.displayName === current.user?.displayName ? chat.user_2 : chat.user_1;
            return (
              <div
                key={chat.id}
                className={`${styles.userItem} ${selectedUser?.id.toString() === chat.id ? styles.selectedUser : ''}`}
                onClick={() =>
                  handleUserClick({
                    id: chat.id, 
                    name: userName.displayName || 'Неизвестный пользователь',
                  })
                }
              >
                <img className={styles.ad_icon} src={chat.mainPhoto ? chat.mainPhoto : ''} alt="main" />

                <div>{userName.displayName}</div>
                <div className={styles.lastMessage}>{chat.lastMessage ? chat.lastMessage : ''}</div>
                <div><img></img></div>
              </div>
            );
          })}
          {chatsData?.getChats?.length === 0 &&
            <span className={styles.no_chats}>Чатов нет</span>
          }
        </div>
        {selectedUser ?
          <div className={styles.chat__container}>
            <div className={styles.chatHeader}>
              <img src={findUser?.avatar != null ? findUser.avatar : '/images/Profile/user.svg'} className={styles.avatar}/>
              <div className={styles.username}>{selectedUser?.name}</div>
            </div>
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
              />
              <input
                type="text"
                placeholder="Введите сообщение..."
                onChange={(e) => setInputValue(e.target.value)}
                className={styles.input_text}
                value={inputValue}
                onKeyDown={handleKeyDown}
              />
              <button className={styles.button_send} onClick={sendMessage}>
                <img src="/images/profile/send.svg" alt="send" />
              </button>
            </div>
          </div>
          :
          <div className={styles.chat__container}>
            <span className={styles.preview_chat}>Выберите, кому бы вы хотели написать</span>
          </div>
        }
      </div>
    </div>
  );
};

export default CreateMessageComponent;
