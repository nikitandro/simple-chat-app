import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsDefined } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ example: 'Никита', description: 'Имя' })
    @IsDefined({ message: 'Должно быть определено' })
    @IsString({ message: 'Должно быть строкой' })
    readonly name: string;

    @ApiProperty({ example: 'email@email.com' })
    @IsDefined({ message: 'Должно быть определено' })
    @IsString({ message: 'Должно быть строкой' })
    @IsEmail({}, { message: 'Некорректный email' })
    readonly email: string;

    @ApiProperty({ example: '1234', description: 'Хэшированный пароль' })
    @IsDefined({ message: 'Должно быть определено' })
    @IsString({ message: 'Должно быть строкой' })
    readonly password: string;
}
