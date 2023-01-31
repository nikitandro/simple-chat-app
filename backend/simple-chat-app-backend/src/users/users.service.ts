import { Injectable, UsePipes } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User) private userRepository: typeof User,
        private jwtServie: JwtService,
    ) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll();
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({
            where: { email },
            include: { all: true },
        });
        return user;
    }

    async getUserById(id: string) {
        const user = this.userRepository.findOne({
            where: { id },
            attributes: { exclude: ['password', 'refreshToken'] },
        });
        return user;
    }

    async getUserByBearerToken(bearerToken: string) {
        const id = this.getUserIdFromBearerToken(bearerToken);
        return this.getUserById(id);
    }

    getUserIdFromBearerToken(bearerToken: string) {
        const token = this.getTokenFromBearerToken(bearerToken);
        return this.getUserIdFromToken(token);
    }

    getUserIdFromToken(token: string) {
        return (
            this.jwtServie.decode(token) as {
                email: string;
                id: string;
                iat: number;
                exp: number;
            }
        ).id;
    }

    getTokenFromBearerToken(bearerToken: string) {
        return bearerToken.split(' ')[1];
    }
}
