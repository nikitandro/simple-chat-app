import { Model } from 'sequelize-typescript';
import { User } from 'src/users/users.model';
interface MessageCreationAttributes {
    userId: string;
    text: string;
}
export declare class Message extends Model<Message, MessageCreationAttributes> {
    id: number;
    text: string;
    userId: string;
    user: User;
}
export {};
