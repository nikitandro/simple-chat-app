import ky from 'ky';
import { API_URL } from './host';

export type UserRegisterRequestBody = {
  name: string;
  email: string;
  password: string;
};

export type UserLoginRequestBody = {
  email: string;
  password: string;
};

export class UserAPI {
  static register(body: UserRegisterRequestBody) {
    return ky.post(`${API_URL}/auth/registration`, {
      json: body,
    });
  }
  static login(body: UserLoginRequestBody) {
    return ky.post(`${API_URL}/auth/login`, { json: body });
  }
}
