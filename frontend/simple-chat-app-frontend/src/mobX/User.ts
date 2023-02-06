import { makeAutoObservable } from 'mobx';
import {
  GetUserResponse,
  UserAPI,
  UserAuthResponse,
  UserLoginRequestBody,
  UserRegisterRequestBody,
} from '../api/UserAPI';

export interface IUser {
  name: string | null;
  id: string | null;
  banned: boolean | null;
  banReason: string | null;
  createdAt: Date | string | null;
  updatedAt: Date | string | null;
}

class User implements IUser {
  name: string | null;
  id: string | null;
  private _isAuth: boolean;
  banned: boolean | null;
  banReason: string | null;
  createdAt: Date | string | null;
  updatedAt: Date | string | null;

  constructor() {
    makeAutoObservable(this);
    this.name = null;
    this.id = null;
    this._isAuth = false;
    this.banned = null;
    this.banReason = null;
    this.createdAt = null;
    this.updatedAt = null;
    if (localStorage.getItem('token')) {
      this.fetchUser();
    }
  }

  get isAuth() {
    return this._isAuth;
  }

  getTokenFromLocalStorage() {
    return localStorage.getItem('token');
  }

  setTokenToLocalStorage(token: string) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem('token');
    this._isAuth = false;
    this.name = null;
    this.id = null;
    this.banned = null;
    this.banReason = null;
    this.createdAt = null;
    this.updatedAt = null;
  }

  async register(requestBody: UserRegisterRequestBody) {
    const response = await UserAPI.register(requestBody).catch((error) => {
      console.log(error);
    });

    if (response?.ok) {
      const responseJson = (await response.json()) as UserAuthResponse;
      localStorage.setItem('token', responseJson.token);
    }

    await this.fetchUser();
    return response;
  }

  async login(requestBody: UserLoginRequestBody) {
    const response = await UserAPI.login(requestBody).catch((error) => {
      console.log(error);
    });

    if (!response?.ok) {
      return response;
    }

    const responseJson = (await response.json()) as UserAuthResponse;
    localStorage.setItem('token', responseJson.token);

    await this.fetchUser();
    return response;
  }

  async fetchUser() {
    let timeoutId: NodeJS.Timeout | undefined;
    const response = await UserAPI.getUser().catch((error) => {
      console.log(error);
    });

    if (!response?.ok) {
      this.logout();
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      return;
    }

    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        this.fetchUser();
      }, 300000);
    }
    const responseJson = (await response.json()) as GetUserResponse;
    this.setUser(responseJson);
  }

  private setUser(user: Omit<IUser, '_isAuth'>) {
    this.id = user.id;
    this.name = user.name;
    this.banned = user.banned;
    this.banReason = user.banReason;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
    this._isAuth = true;
  }
}

export default new User();
