import {
    Controller,
    Post,
    Body,
    Get,
    UseGuards,
    UsePipes,
    Req,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, OmitType } from '@nestjs/swagger';
import { Request } from 'express';
import { request } from 'http';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags('Пользователи')
@Controller('user')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @ApiOperation({ summary: 'Запрос на создание пользователя' })
    @ApiResponse({ status: 200, type: User })
    @Post()
    public create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    // @ApiOperation({ summary: 'Запрос всех пользователей' })
    // @ApiResponse({ status: 200, type: [User] })
    // @UseGuards(JwtAuthGuard)
    // @Get()
    // public getAll() {
    //     return this.usersService.getAllUsers();
    // }

    @ApiOperation({ summary: 'Запрос пользователя по токену' })
    @ApiResponse({
        status: 200,
        type: OmitType<User, 'password' | 'refreshToken'>(User, [
            'password',
            'refreshToken',
        ]),
    })
    @UseGuards(JwtAuthGuard)
    @Get()
    public getUser(@Req() request: Request) {
        const token = request.headers.authorization;

        return this.usersService.getUserByBearerToken(token);
    }
}
