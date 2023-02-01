import { observer } from 'mobx-react-lite';
import { Message } from '../../mobX/Chat';
import User from '../../mobX/User';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import { Container } from '../UI/Container/Container';
import './ChatWindow.scss';

export interface ChatWindowProps {
  messages: Message[];
}

export const ChatWindow = observer(({ messages }: ChatWindowProps) => {
  return (
    <Container className='chat-window'>
      {messages.map((message, index, messageArray) => {
        return <ChatMessage message={message} key={index} />;
      })}
    </Container>
  );
});
