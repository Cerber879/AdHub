import React, { useState, useEffect, useRef, useMemo } from 'react';
import styles from './messenger.module.css';
import { ChatInfoOutput, ChatUserResponse, useCreateChatMutation, useFindUserQuery, useGetChatsQuery, useGetMessagesQuery, UserModel, useSendMessageMutation } from '../../../graphql/generated/output';
import { useCurrent } from '../../../hooks/useCurrent';
import { v4 as uuidv4 } from 'uuid';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '../../../utils/routes';

const CreateMessageComponent: React.FC = () => {
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const current = useCurrent();
  const navigate = useNavigate();

  const location = useLocation();
  const isTempPresent = location.pathname.includes('/temp');

  const { productId, friendId } = useParams();

  const [sendMessageMutation] = useSendMessageMutation({
    onCompleted: () => {
      refetchChats()
      refetchMessages()
    }
  });

  const [createChat] = useCreateChatMutation({
    onCompleted: () => {
      refetchChats()
      refetchMessages()
    }
  });

  const { data: chatsData, refetch: refetchChats } = useGetChatsQuery();

  const { data: messagesData, refetch: refetchMessages } = useGetMessagesQuery({
    variables: { 
      chatId: !isTempPresent && friendId ? friendId : ''
    }
  });

  const { data: userData, refetch: refetchUser } = useFindUserQuery({ 
    variables: { 
      id: friendId || ''
    }
  });

  const [inputValue, setInputValue] = useState<string>('');

  const [chats, setChats] = useState(chatsData?.getChats);
  const [messages, setMessages] = useState(messagesData?.getMessages);

  const [selectedUser, setSelectedUser] = useState<ChatUserResponse | null>(() => {
    if (!isTempPresent && chatsData) {
      const chat = chatsData.getChats.find(
        (chat) => chat.user_1.id === current.user?.id || chat.user_2.id === current.user?.id
      );
  
      if (chat) {
        const selected = chat.user_1.id === current.user?.id ? chat.user_2 : chat.user_1;
        return {
          id: selected.id,
          displayName: selected.displayName,
          avatar: selected.avatar || null
        };
      }
    }

    if (isTempPresent && userData) {
      const user = userData.findUser;
      console.log(user)
      return {
        id: user.id,
        displayName: user.displayName,
        avatar: user.avatar || null
      };
    }
  
    return null;
  });


  console.log(selectedUser)
  
  const [selectedChat, setSelectedChat] = useState<ChatInfoOutput | null>(
    !isTempPresent && chatsData
      ? chatsData.getChats.find(chat => chat.id === friendId) || null
      : null
  );

  useEffect(() => {
    if (chatsData?.getChats) {
      setChats(chatsData.getChats);

      const chat = chatsData.getChats.find(chat => chat.id === friendId) || null;
      setSelectedChat(chat);
  
      if (chat) {
        const selected = chat.user_1.id === current.user?.id ? chat.user_2 : chat.user_1;
        setSelectedUser({
          id: selected.id,
          displayName: selected.displayName,
          avatar: selected.avatar || null,
        });
      } else if (isTempPresent && userData) {
        const user = userData.findUser;
        console.log(user)
        setSelectedUser({
          id: user.id,
          displayName: user.displayName,
          avatar: user.avatar || null
        });
      }
    }
  
    if (messagesData?.getMessages) {
      setMessages(messagesData.getMessages);
    }
  
  }, [messagesData, chatsData, friendId, current.user]);
  

  const sendMessage = async () => {
    if (inputValue.trim() !== '' && selectedChat) { 
      try {
        
        await sendMessageMutation({
          variables: { 
            data: { 
              chatId: selectedChat?.id || '', 
              content: inputValue.trim() 
            } 
          }
        });

        setInputValue(''); 

      } catch (error) {
        console.error('Ошибка отправки сообщения:', error);
      }
    } else if (inputValue.trim() !== '' && isTempPresent && friendId && productId) {
      const uniqueID = uuidv4()

      await createChat({
        variables: {
          uniqueID: uniqueID,
          friendId: friendId,
          productId: productId,
          content: inputValue.trim()
        }
      })

      navigate(`${ROUTES.MESSEGES}/${uniqueID}`)
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const handleUserClick = (chat: ChatInfoOutput) => {
    setSelectedChat(chat)
    navigate(`${ROUTES.MESSEGES}/${chat.id}`)
    setMessages([])
    refetchMessages(); 
    refetchUser()
  };

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
          {chats ? 
            chats.length !== 0 ? chats.map((chat) => {
              const user = chat.user_1?.displayName === current.user?.displayName ? chat.user_2 : chat.user_1;
              return (
                <div
                  key={chat.id}
                  className={`${selectedChat?.id === chat.id ? styles.selectedChat : styles.chatItem}`}
                  onClick={() =>
                    handleUserClick(chat)
                  }
                >
                  <img className={styles.ad_icon} src={chat.mainPhoto?.link ? chat.mainPhoto.link : ''} alt="main" />
                  <div className={styles.chat_item}>
                    <span>{user.displayName}</span>
                    <span>{`${chat.announcement?.name}·${chat.announcement?.price}`}</span>
                    <span className={`${selectedChat?.id !== chat.id ? styles.lastMessage : styles.lastMessage_white}`}>{chat.lastMessage ? chat.lastMessage : ''}</span>
                  </div>
                </div>
              );
            }) :
              <span className={styles.no_chats}>Чатов нет</span>
          : null}
        </div>
        {selectedUser ?
          <div className={styles.chat__container}>
            <div className={styles.chatHeader}>
              <img src={selectedUser?.avatar != null ? selectedUser.avatar : '/images/Profile/user.svg'} className={styles.avatar}/>
              <div className={styles.username}>{selectedUser?.displayName}</div>
            </div>
            <div className={styles.chat__box} ref={chatBoxRef}>
              {messages && messages.map((message) => (
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
