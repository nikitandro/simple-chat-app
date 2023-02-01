import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
export declare class UsersService {
    private userRepository;
    private jwtServie;
    constructor(userRepository: typeof User, jwtServie: JwtService);
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUserByEmail(email: string): Promise<User>;
    getUserById(id: string): Promise<User>;
    getUserByBearerToken(bearerToken: string): Promise<User>;
    getUserNameByUserId(id: string): Promise<string>;
    getUserIdFromBearerToken(bearerToken: string): string;
    getUserIdFromToken(token: string): string;
    getTokenFromBearerToken(bearerToken: string): string;
}
