import { observer } from 'mobx-react-lite';
import { ChatInputField } from '../../components/ChatInputField/ChatInputField';
import { ChatSendMessageButton } from '../../components/ChatSendMessageButton/ChatSendMessageButton';
import { ChatWindow } from '../../components/ChatWindow/ChatWindow';
import { Container } from '../../components/UI/Container/Container';
import './ChatPage.scss';

export const ChatPage = observer(() => {
  return (
    <Container className='chat-page'>
      <Container className='chat-wrapper'>
        <Container className='chat'>
          <Container className='chat-window-wrapper'>
            <ChatWindow />
          </Container>
          <Container className='chat-controls-wrapper'>
            <ChatInputField />
            <ChatSendMessageButton />
          </Container>
        </Container>
      </Container>
    </Container>
  );
});
