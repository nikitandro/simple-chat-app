import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString, Length, min } from 'class-validator';

export class CreateMessageDto {
    @ApiProperty({ example: 'Hello!', description: 'Текст сообщения' })
    @IsDefined({ message: 'Должно быть определено' })
    @IsString({ message: 'Должно быть строкой' })
    @Length(1, 10000, { message: 'Длина строки должна быть больше нуля' })
    readonly text: string;

    @IsDefined({ message: 'Должно быть определено' })
    @IsString({ message: 'Должно быть строкой' })
    readonly userId: string;
}
