"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const users_model_1 = require("../users/users.model");
const messages_model_1 = require("./messages.model");
let MessagesService = class MessagesService {
    constructor(messageRepository) {
        this.messageRepository = messageRepository;
    }
    async createMessage(dto, userId) {
        const createObject = { userId, text: dto.text };
        const message = await this.messageRepository.create(createObject);
        return this.messageRepository.findOne({
            where: { id: message.id },
            attributes: { exclude: ['userId'] },
            include: {
                model: users_model_1.User,
                attributes: {
                    exclude: [
                        'password',
                        'banned',
                        'banReason',
                        'createdAt',
                        'updatedAt',
                        'refreshToken',
                    ],
                },
            },
        });
    }
    async getMessages() {
        return this.messageRepository.findAll({
            attributes: { exclude: ['userId'] },
            include: {
                model: users_model_1.User,
                attributes: {
                    exclude: [
                        'password',
                        'banned',
                        'banReason',
                        'createdAt',
                        'updatedAt',
                        'refreshToken',
                    ],
                },
            },
        });
    }
};
MessagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(messages_model_1.Message)),
    __metadata("design:paramtypes", [Object])
], MessagesService);
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map