"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const auth_module_1 = require("../auth/auth.module");
const users_model_1 = require("../users/users.model");
const users_module_1 = require("../users/users.module");
const messages_controller_1 = require("./messages.controller");
const messages_model_1 = require("./messages.model");
const messages_service_1 = require("./messages.service");
let MessagesModule = class MessagesModule {
};
MessagesModule = __decorate([
    (0, common_1.Module)({
        controllers: [messages_controller_1.MessagesController],
        providers: [messages_service_1.MessagesService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([users_model_1.User, messages_model_1.Message]),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
        ],
        exports: [messages_service_1.MessagesService],
    })
], MessagesModule);
exports.MessagesModule = MessagesModule;
//# sourceMappingURL=messages.module.js.map