import React, { useState, useEffect, useRef } from 'react';
import styles from './messenger.module.css'
import { useQuery } from '@apollo/client';

interface Message {
  id: string;
  text: string;
  senderId: string;
  content: string;
  sentAt: string;
}

interface User {
  id: number;
  name: string;
}

const CreateMessageComponent: React.FC = () => 
{
  const [messages, setMessages] = useState<{ [key: number]: Message[] }>({});
  const [inputValue, setInputValue] = useState<string>('');
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Запрос для получения сообщений
  const { loading, error, data, refetch } = useQuery(GET_MESSAGES, {
    variables: { chatId: selectedUser?.id }, // Передаем chatId
    skip: !selectedUser?.id, // Пропускаем запрос, если чат не выбран
  });

  // Мутация для отправки сообщения
  const [sendMessageMutation] = useMutation(SEND_MESSAGE);

  const sendMessage = async () => {
    if (inputValue.trim() !== '' && selectedUser) {
      try {
        // Отправляем сообщение через мутацию
        await sendMessageMutation({
          variables: {
            chatId: selectedUser.id, // chatId выбранного пользователя
            content: inputValue.trim(), // Текст сообщения
            senderId: 'user', // ID отправителя
          },
        });

        // После отправки перезапрашиваем сообщения
        await refetch();
        setInputValue(''); // Очищаем поле ввода
      } catch (error) {
        console.error("Ошибка при отправке сообщения", error);
      }
    }
  };


  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => 
  {
    if (event.key === 'Enter') 
    {
      sendMessage();
    }
  };

  const handleUserClick = (user: User) => 
  {
    setSelectedUser(user);
    refetch();
  };

  useEffect(() => 
  {
    if (chatBoxRef.current) 
    {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages[selectedUser?.id || 0]]);

  useEffect(() => 
  {
    if (users.length > 0) 
    {
      handleUserClick(users[0]); // Выбираем первого пользователя по умолчанию
    }
  }, []);

  useEffect(() => {
    if (chatBoxRef.current && selectedUser) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [selectedUser]);

  return (
    <div className={styles.appContainer}>
      <div className={styles.usersContainer}>
        <span className={styles.name_container}>Сообщения</span>
        <div className={styles.list_users}>
          {data?.users.map((user: User) => (
            <div
              key={user.id}
              className={`${styles.userItem} ${selectedUser?.id === user.id ? styles.selectedUser : ''}`}
              onClick={() => handleUserClick(user)}
            >
              {user.name}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.chat__container}>
        {selectedUser && (
          <div className={styles.chatHeader}>
            <div className={styles.avatar}></div>
            <div className={styles.username}>{selectedUser.name}</div>
          </div>
        )}
        <div className={styles.chat__box} id="chatBox" ref={chatBoxRef}>
          {selectedUser && messages[selectedUser.id]?.map((message, index) => (
            <div key={index} className={`${styles.message} ${styles[message.senderId]}`}>
              {message.content}
            </div>
          ))}
        </div>
        <div className={styles.input__container}>
          <input 
            type="text" 
            id="messageInput" 
            placeholder="Введите сообщение..."
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={handleKeyDown}
                        
          />
          <button
            onClick={sendMessage}>Отправить
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateMessageComponent;