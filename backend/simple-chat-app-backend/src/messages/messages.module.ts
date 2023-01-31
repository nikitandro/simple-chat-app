import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { User } from 'src/users/users.model';
import { UsersModule } from 'src/users/users.module';
import { MessagesController } from './messages.controller';
import { Message } from './messages.model';
import { MessagesService } from './messages.service';

@Module({
    controllers: [MessagesController],
    providers: [MessagesService],
    imports: [
        SequelizeModule.forFeature([User, Message]),
        AuthModule,
        UsersModule,
    ],
    exports: [MessagesService],
})
export class MessagesModule {}
