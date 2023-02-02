import { observer } from 'mobx-react-lite';
import { useChatAutoScroll } from '../../hooks/useChatAutoScroll';
import { Message } from '../../mobX/Chat';
import User from '../../mobX/User';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import { Container } from '../UI/Container/Container';
import './ChatWindow.scss';

export interface ChatWindowProps {
  messages: Message[];
}

export const ChatWindow = observer(({ messages }: ChatWindowProps) => {
  const chatWindowRef = useChatAutoScroll<HTMLDivElement, Message[]>(messages);
  return (
    <Container className='chat-window' ref={chatWindowRef}>
      {messages.map((message, index, messageArray) => {
        return <ChatMessage message={message} key={index} />;
      })}
    </Container>
  );
});
