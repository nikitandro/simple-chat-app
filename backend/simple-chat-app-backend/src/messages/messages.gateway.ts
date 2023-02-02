import { UseGuards } from '@nestjs/common';
import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateMessageDto } from './dto/create-message.dto';

import { MessagesService } from './messages.service';

@WebSocketGateway(2048, { cors: true })
export class MessageGateway {
    @WebSocketServer()
    server;

    constructor(private readonly messageService: MessagesService) {}

    // @UseGuards(JwtAuthGuard)
    @SubscribeMessage('message:get')
    async getMessages() {
        const messages = await this.messageService.getMessages();

        this.server.emit('messages', messages);
    }

    // @UseGuards(JwtAuthGuard)
    @SubscribeMessage('message:send')
    async addMessage(@MessageBody() dto: CreateMessageDto) {
        const message = await this.messageService.createMessage(
            dto,
            dto.userId,
        );

        this.server.emit('message', message);
    }
}
