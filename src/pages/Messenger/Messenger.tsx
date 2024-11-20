import React, { useState, useEffect, useRef  } from 'react';
import styles from './messenger.module.css'

interface Message 
{
    text: string;
    sender: 'user' | 'other';
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

    const users: User[] = [
        { id: 1, name: 'Evelone' },
        { id: 2, name: 'Старый бог' },
        { id: 3, name: 'rostislave999' },
        { id: 4, name: 'Фирамир' },
        { id: 5, name: 'Никита строитель' },
        { id: 6, name: 'Илюха качалка' },
        { id: 7, name: 'Valera True' },
        { id: 8, name: 'Stray228' },
        { id: 9, name: 'Vovapain' },
        { id: 10, name: 'Chamber' },
        { id: 11, name: 'Pudge easport' },
        { id: 12, name: 'keker003' },
        { id: 13, name: 'Gensuxa' },
        { id: 14, name: 'Нехорошкова' },
        { id: 15, name: 'Захаров Лев' },
        { id: 16, name: 'Жопа пингвина' },
        { id: 17, name: 'Нереальная соска' },
        { id: 18, name: 'Да' },
    ];

    const sendMessage = () => 
    {
        if (inputValue.trim() !== '' && selectedUser) {
            const newMessage: Message = { text: inputValue.trim(), sender: 'user' };
            setMessages({
                ...messages,
                [selectedUser.id]: [...(messages[selectedUser.id] || []), newMessage],
            });
            setInputValue('');
        }
    };

    const receiveMessage = (messageText: string) => 
    {
        if (selectedUser) {
            const newMessage: Message = { text: messageText, sender: 'other' };
            setMessages({
                ...messages,
                [selectedUser.id]: [...(messages[selectedUser.id] || []), newMessage],
            });
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
        if (!messages[user.id]) 
        {
            receiveMessage(`Привет! Это ${user.name}.`);
        }
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

    return (
        <div className={styles.appContainer}>
                <div className={styles.usersContainer}>
                {users.map((user) => (
                    <div
                        key={user.id}
                        className={`${styles.userItem} ${selectedUser?.id === user.id ? styles.selectedUser : ''}`}
                        onClick={() => handleUserClick(user)}
                    >
                        {user.name}
                    </div>
                ))}
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
                            <div key={index} className={`${styles.message} ${styles[message.sender]}`}>
                                {message.text}
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