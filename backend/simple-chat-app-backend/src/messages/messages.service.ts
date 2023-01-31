import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UsersService } from 'src/users/users.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './messages.model';

@Injectable()
export class MessagesService {
    constructor(
        @InjectModel(Message) private messageRepository: typeof Message,
    ) {}

    async create(dto: CreateMessageDto, userId: string) {
        const createObject = { userId, text: dto.text };

        const message = await this.messageRepository.create(createObject);
        return message;
    }
}
