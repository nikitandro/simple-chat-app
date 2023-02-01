// import { makeAutoObservable } from 'mobx';

// import RootStore from './RootStore';
// import User from './User';

export interface Message {
  id: number;
  text: string;
  createdAt: string;
  updatedAt: string;
  user: UserFromMessage;
}

interface UserFromMessage {
  id: string;
  name: string;
  email: string;
}

// class Chat {
//   private rootStore;
//   private user = User;
//   public messages: Message[];

//   constructor() {
//     makeAutoObservable(this);
//     this.rootStore = RootStore;
//     this.messages = [];
//   }

//   async sendMessage(text: string) {
//     if (this.user.id) {
//       console.log(await ChatAPI.sendMessage({ text, userId: this.user.id }));
//     }
//   }

//   async getMessages() {
//     const messages = await ChatAPI.getMessages().json();
//     this.messages = messages as Message[];
//   }
// }

// export default Chat;
