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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const sequelize_1 = require("@nestjs/sequelize");
const users_model_1 = require("./users.model");
let UsersService = class UsersService {
    constructor(userRepository, jwtServie) {
        this.userRepository = userRepository;
        this.jwtServie = jwtServie;
    }
    async createUser(dto) {
        const user = await this.userRepository.create(dto);
        return user;
    }
    async getAllUsers() {
        const users = await this.userRepository.findAll();
        return users;
    }
    async getUserByEmail(email) {
        const user = await this.userRepository.findOne({
            where: { email },
            include: { all: true },
        });
        return user;
    }
    async getUserById(id) {
        const user = this.userRepository.findOne({
            where: { id },
            attributes: { exclude: ['password', 'refreshToken'] },
        });
        return user;
    }
    async getUserByBearerToken(bearerToken) {
        const id = this.getUserIdFromBearerToken(bearerToken);
        return this.getUserById(id);
    }
    getUserIdFromBearerToken(bearerToken) {
        const token = this.getTokenFromBearerToken(bearerToken);
        return this.getUserIdFromToken(token);
    }
    getUserIdFromToken(token) {
        return this.jwtServie.decode(token).id;
    }
    getTokenFromBearerToken(bearerToken) {
        return bearerToken.split(' ')[1];
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(users_model_1.User)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map