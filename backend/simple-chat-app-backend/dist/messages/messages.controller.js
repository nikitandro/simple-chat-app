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
exports.MessagesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const users_service_1 = require("../users/users.service");
const create_message_dto_1 = require("./dto/create-message.dto");
const messages_service_1 = require("./messages.service");
let MessagesController = class MessagesController {
    constructor(messagesService, userService) {
        this.messagesService = messagesService;
        this.userService = userService;
    }
    createMessage(request, dto) {
        const bearerToken = request.headers.authorization;
        const userId = this.userService.getUserIdFromBearerToken(bearerToken);
        return this.messagesService.create(dto, userId);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Отправка сообщения' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_message_dto_1.CreateMessageDto]),
    __metadata("design:returntype", void 0)
], MessagesController.prototype, "createMessage", null);
MessagesController = __decorate([
    (0, swagger_1.ApiTags)('Сообщения'),
    (0, common_1.Controller)('message'),
    __metadata("design:paramtypes", [messages_service_1.MessagesService,
        users_service_1.UsersService])
], MessagesController);
exports.MessagesController = MessagesController;
//# sourceMappingURL=messages.controller.js.map