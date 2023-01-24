import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: 'Никита', description: 'Имя' })
    readonly name: string;

    @ApiProperty({ example: 'email@email.com' })
    readonly email: string;

    @ApiProperty({ example: '1234', description: 'Хэшированный пароль' })
    readonly password: string;
}
