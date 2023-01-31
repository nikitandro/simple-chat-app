import { observer } from 'mobx-react-lite';
import { Message } from '../../mobX/Chat';
import User from '../../mobX/User';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import { Container } from '../UI/Container/Container';
import './ChatWindow.scss';

export const ChatWindow = observer(() => {
  const largeText =
    'Привет, Хабр! Группа X-Com продолжает поиск оптимальных комплектующих для сборки игрового компьютера. И если вы до конца не уверены, стоит ли переплачивать за диагональ и частоту, как оценивать время задержки матрицы, важно ли подключать монитор через HDMI или DP, а также имеют ли значение другие “геймерские” характеристики — давайте скорее под кат!';
  const messages: Message[] = [
    { senderId: '1', senderName: 'niko', text: largeText },
    { senderId: User.id!, senderName: User.name!, text: largeText },
    { senderId: User.id!, senderName: User.name!, text: 'HI' },
    { senderId: '1', senderName: 'niko', text: 'HI' },
  ];
  return (
    <Container className='chat-window'>
      {messages.map((message, index, messageArray) => {
        return <ChatMessage message={message} key={index} />;
      })}
    </Container>
  );
});
