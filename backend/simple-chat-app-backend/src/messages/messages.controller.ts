import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsersService } from 'src/users/users.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';

@ApiTags('Сообщения')
@Controller('message')
export class MessagesController {
    constructor(
        private messagesService: MessagesService,
        private userService: UsersService,
    ) {}

    @ApiOperation({ summary: 'Отправка сообщения' })
    @ApiResponse({ status: 200 })
    @UseGuards(JwtAuthGuard)
    @Post()
    createMessage(@Req() request: Request, @Body() dto: CreateMessageDto) {
        const bearerToken = request.headers.authorization;
        const userId = this.userService.getUserIdFromBearerToken(bearerToken);
        return this.messagesService.create(dto, userId);
    }
}
