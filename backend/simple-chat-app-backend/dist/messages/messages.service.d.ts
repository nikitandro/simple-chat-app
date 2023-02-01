import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './messages.model';
export declare class MessagesService {
    private messageRepository;
    constructor(messageRepository: typeof Message);
    createMessage(dto: CreateMessageDto, userId: string): Promise<Message>;
    getMessages(): Promise<Message[]>;
}
