import { observer } from 'mobx-react-lite';
import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { API_URL } from '../../api/host';
import { ChatInputField } from '../../components/ChatInputField/ChatInputField';
import { ChatSendMessageButton } from '../../components/ChatSendMessageButton/ChatSendMessageButton';
import { ChatWindow } from '../../components/ChatWindow/ChatWindow';
import { Container } from '../../components/UI/Container/Container';
import { Message } from '../../mobX/Chat';
import User from '../../mobX/User';
import './ChatPage.scss';

export const ChatPage = observer(() => {
  const [chatInputState, setChatInputState] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const chatInputRef = useRef<HTMLTextAreaElement>(null);

  const [socket, setSocket] = useState<Socket>();

  // const sendMessage = () => {
  //   if (chatInputState) {
  //     console.log(chatInputState);
  //   }
  // };

  useEffect(() => {
    const newSocket = io('http://localhost:2048');
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.emit('message:get');

    socket.on('messages', (messages) => {
      console.log(messages);
      setMessages(messages);
    });
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const sendMessage = () => {
    console.log('clicked');
    console.log(chatInputState);
    if (!chatInputState && !socket) return;
    socket?.emit('message:send', { text: chatInputState, userId: User.id });
    setChatInputState('');
    if (chatInputRef.current) chatInputRef.current.value = '';
  };

  return (
    <Container className='chat-page'>
      <Container className='chat-wrapper'>
        <Container className='chat'>
          <Container className='chat-window-wrapper'>
            <ChatWindow messages={messages} />
          </Container>
          <Container className='chat-controls-wrapper'>
            <ChatInputField
              ref={chatInputRef}
              onChange={(event) => setChatInputState(event.target.value)}
            />
            <ChatSendMessageButton onClick={sendMessage} />
          </Container>
        </Container>
      </Container>
    </Container>
  );
});
