import { Request } from 'express';
import { UsersService } from 'src/users/users.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';
export declare class MessagesController {
    private messagesService;
    private userService;
    constructor(messagesService: MessagesService, userService: UsersService);
    createMessage(request: Request, dto: CreateMessageDto): Promise<import("./messages.model").Message>;
}
