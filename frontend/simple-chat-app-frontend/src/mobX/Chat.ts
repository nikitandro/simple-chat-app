import { makeAutoObservable } from 'mobx';
import RootStore from './RootStore';

export interface IMessage {
  text: string;
  senderName: string;
  senderId: string;
}

class Chat {
  private rootStore;
  public messages: IMessage[];
  constructor() {
    makeAutoObservable(this);
    this.rootStore = RootStore;
    this.messages = [];
  }
}

export default new Chat();
