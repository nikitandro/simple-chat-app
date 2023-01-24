import { makeAutoObservable } from 'mobx';

export interface IUser {
  name: string | null;
  id: string | null;
}

class User implements IUser {
  private _name: string | null;
  private _id: string | null;

  constructor() {
    makeAutoObservable(this);
    this._name = null;
    this._id = null;
  }

  get name(): string | null {
    return this._name;
  }

  get id(): string | null {
    return this._id;
  }
}
