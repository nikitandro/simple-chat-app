import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';
export declare class MessageGateway {
    private readonly messageService;
    server: any;
    constructor(messageService: MessagesService);
    getMessages(): Promise<void>;
    addMessage(dto: CreateMessageDto): Promise<void>;
}
