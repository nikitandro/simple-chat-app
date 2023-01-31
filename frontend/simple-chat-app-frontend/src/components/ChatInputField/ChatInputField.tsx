import { observer } from 'mobx-react-lite';
import { Container } from '../UI/Container/Container';
import './ChatInputField.scss';

export const ChatInputField = observer(() => {
  return (
    <Container className='chat-input-field-wrapper'>
      <textarea className='chat-input-field' />
    </Container>
  );
});
