import { observer } from 'mobx-react-lite';
import { HTMLAttributes } from 'react';
import { Button } from '../UI/Button/Button';
import { Container } from '../UI/Container/Container';
import './ChatSendMessageButton.scss';

export const ChatSendMessageButton = observer(
  (props: HTMLAttributes<HTMLButtonElement>) => {
    return (
      <Container className='send-message-button'>
        <Button {...props}>Отправить</Button>
      </Container>
    );
  }
);
