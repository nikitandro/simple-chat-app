import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserCreationAttributes {
    email: string;
    password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttributes> {
    @ApiProperty({
        example: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000',
        description: 'Уникальный идентификатор',
    })
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        unique: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: 'Никита', description: 'Имя' })
    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @ApiProperty({ example: 'email@email.com', description: 'Почтовый адрес' })
    @Column({ type: DataType.STRING, allowNull: false })
    email: string;

    @ApiProperty({ example: '1234', description: 'Хэшированный пароль' })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({ example: 'true', description: 'Забанен ли пользователь' })
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @ApiProperty({ example: 'Провокации', description: 'Причина бана' })
    @Column({ type: DataType.STRING, allowNull: true })
    banReason: string;

    @ApiProperty({ description: 'Refresh Token (JWT)' })
    @Column({ type: DataType.STRING, allowNull: true })
    refreshToken: string;
}
