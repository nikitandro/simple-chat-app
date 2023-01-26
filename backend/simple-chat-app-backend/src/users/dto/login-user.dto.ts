import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsDefined } from 'class-validator';

export class LoginUserDto {
    @ApiProperty({ example: 'email@email.com', description: 'Email' })
    @IsDefined({ message: 'Должно быть определено' })
    @IsString({ message: 'Должно быть строкой' })
    @IsEmail({}, { message: 'Некорректный формат' })
    readonly email: string;

    @ApiProperty({ example: '123', description: 'Пароль' })
    @IsDefined({ message: 'Должно быть определено' })
    @IsString({ message: 'Дожно быть строкой' })
    readonly password: string;
}
