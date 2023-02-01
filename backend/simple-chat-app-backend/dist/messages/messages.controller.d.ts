import { UsersService } from 'src/users/users.service';
import { MessagesService } from './messages.service';
export declare class MessagesController {
    private messagesService;
    private userService;
    constructor(messagesService: MessagesService, userService: UsersService);
}
