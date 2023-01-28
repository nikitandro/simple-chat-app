import { makeAutoObservable } from 'mobx';
import {
  UserAPI,
  UserLoginRequestBody,
  UserRegisterRequestBody,
} from '../api/User';

export interface IUser {
  name: string | null;
  id: string | null;
}

class User implements IUser {
  name: string | null;
  id: string | null;
  isAuth: boolean;

  constructor() {
    makeAutoObservable(this);
    this.name = null;
    this.id = null;
    this.isAuth = false;
  }

  getTokenFromLocalStorage() {
    return localStorage.getItem('token');
  }

  setTokenToLocalStorage(token: string) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem('token');
    this.isAuth = false;
  }

  register(requestBody: UserRegisterRequestBody) {
    return UserAPI.register(requestBody);
  }

  login(requestBody: UserLoginRequestBody) {
    return UserAPI.login(requestBody);
  }
}

export default new User();
