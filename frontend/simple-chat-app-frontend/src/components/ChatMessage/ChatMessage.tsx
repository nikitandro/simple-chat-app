import { observer } from 'mobx-react-lite';
import './ChatMessage.scss';
import { Message } from '../../mobX/Chat';
import { Container } from '../UI/Container/Container';
import User from '../../mobX/User';

export interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = observer((props: ChatMessageProps) => {
  const type = props.message.senderId === User.id ? 'outgoing' : 'incoming';
  return (
    <Container className={`chat-message-wrapper ${type}`}>
      <Container className={`chat-message ${type}`}>
        <span className='name'>{props.message.senderName}</span>
        <span className='text'>{props.message.text}</span>
      </Container>
    </Container>
  );
});
