import React, { useState, useEffect, useRef  } from 'react';
import styles from './messenger.module.css'

interface Message 
{
    text: string;
    sender: 'user' | 'other';
}

const CreateMessageComponent: React.FC = () => 
{
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const chatBoxRef = useRef<HTMLDivElement>(null);

    const sendMessage = () => {
        if (inputValue.trim() !== '') {
            const newMessage: Message = { text: inputValue.trim(), sender: 'user' };
            setMessages([...messages, newMessage]);
            setInputValue('');
            console.log('Input value cleared:', inputValue);
        }
    };

    const receiveMessage = (messageText: string) => {
        const newMessage: Message = { text: messageText, sender: 'other' };
        setMessages([...messages, newMessage]);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages]);

    React.useEffect(() => {
        receiveMessage('Привет! Как дела?');
    }, []); //эксперимент с не своим сообщением



    return (
        <div className={styles.chat__container}>
            <div className={styles.chat__box} id="chatBox" ref={chatBoxRef}>
                {messages.map((message, index) => (
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
                onKeyDown={handleKeyDown}
                
                />
            <button
                onClick={sendMessage}>Отправить
            </button>
        </div>
    </div>
    )
}

export default CreateMessageComponent;