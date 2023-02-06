import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString, Length, min, MinLength } from 'class-validator';

export class CreateMessageDto {
    @ApiProperty({ example: 'Hello!', description: 'Текст сообщения' })
    @IsDefined({ message: 'Должно быть определено' })
    @IsString({ message: 'Должно быть строкой' })
    @MinLength(1, { message: 'Длина строки должна быть больше нуля' })
    readonly text: string;

    @IsDefined({ message: 'Должно быть определено' })
    @IsString({ message: 'Должно быть строкой' })
    readonly userId: string;
}
