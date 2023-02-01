import ky from 'ky';
import { io } from 'socket.io-client';
import { API_URL } from './host';

export type SendMessageRequestBody = {
  text: string;
  userId: string;
};

// class ChatAPI {
//   private socket = io(API_URL);

//   sendMessage(body: SendMessageRequestBody) {
//     this.socket.emit('message:send', body);
//     // const bearerToken = 'Bearer ' + localStorage.getItem('token');
//     // return ky.post(`${API_URL}/message`, {
//     //   json: body,
//     //   headers: { authorization: bearerToken },
//     // });
//   }
//   getMessages() {
//     const bearerToken = 'Bearer ' + localStorage.getItem('token');
//     return ky.get(`${API_URL}/message`, {
//       headers: { authorization: bearerToken },
//     });
//   }
// }
