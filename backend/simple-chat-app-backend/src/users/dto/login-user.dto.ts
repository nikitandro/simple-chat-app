import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
    @ApiProperty({ example: 'email@email.com', description: 'Email' })
    readonly email: string;

    @ApiProperty({ example: '123', description: 'Пароль' })
    readonly password: string;
}
