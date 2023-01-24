import { Model } from 'sequelize-typescript';
interface UserCreationAttributes {
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreationAttributes> {
    id: string;
    name: string;
    email: string;
    password: string;
    banned: boolean;
    banReason: string;
    refreshToken: string;
}
export {};
