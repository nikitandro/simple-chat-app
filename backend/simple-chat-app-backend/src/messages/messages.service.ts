import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { OmitType } from '@nestjs/swagger';
import { User } from 'src/users/users.model';
import { UsersService } from 'src/users/users.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './messages.model';

@Injectable()
export class MessagesService {
    constructor(
        @InjectModel(Message) private messageRepository: typeof Message,
    ) {}

    async createMessage(dto: CreateMessageDto, userId: string) {
        const createObject = { userId, text: dto.text };

        const message = await this.messageRepository.create(createObject);
        return message;
    }

    async getMessages() {
        return this.messageRepository.findAll({
            attributes: { exclude: ['userId'] },
            include: {
                model: User,
                attributes: {
                    exclude: [
                        'password',
                        'banned',
                        'banReason',
                        'createdAt',
                        'updatedAt',
                        'refreshToken',
                    ],
                },
            },
        });
    }
}
