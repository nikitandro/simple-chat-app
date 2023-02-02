import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef, useState } from 'react';
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
  const [messages, setMessages] = useState<Message[]>(() => []);
  const chatInputRef = useRef<HTMLTextAreaElement>(null);

  const [socket, setSocket] = useState<Socket>();

  const eraseChatInput = () => {
    setChatInputState('');
    if (chatInputRef.current) {
      chatInputRef.current.value = '';
    }
  };

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

    socket.on('messages', (messagesIncome) => {
      console.log(messagesIncome);
      setMessages(messagesIncome);
    });

    socket.on('message', (messageIncome) => {
      console.log(messageIncome);
      setMessages((prevMessages) => prevMessages.concat([messageIncome]));
    });
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const sendMessage = () => {
    if (!chatInputState && !socket) return;
    setChatInputState(chatInputState.trim());
    socket?.emit('message:send', { text: chatInputState, userId: User.id });
    eraseChatInput();
  };

  const onChatInputEnterKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (
      event.key === 'Enter' &&
      !(event.shiftKey || event.ctrlKey || event.altKey || event.metaKey)
    ) {
      event.preventDefault();
      sendMessage();
      eraseChatInput();
    }
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
              onKeyDown={onChatInputEnterKeyDown}
              onChange={(event) => setChatInputState(event.target.value)}
            />
            <ChatSendMessageButton onClick={sendMessage} />
          </Container>
        </Container>
      </Container>
    </Container>
  );
});
