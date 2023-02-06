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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let WsGuard = class WsGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    canActivate(context) {
        const request = context.getArgs()[0].handshake;
        try {
            const authHeader = request.headers.authorization;
            const [bearer, token] = authHeader.split(' ');
            if (bearer !== 'Bearer')
                throw new common_1.UnauthorizedException({
                    message: 'Пользователь не авторизован',
                });
            const user = this.jwtService.verify(token);
            request.user = user;
            return true;
        }
        catch (e) {
            return false;
        }
    }
};
WsGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], WsGuard);
exports.WsGuard = WsGuard;
//# sourceMappingURL=jwt-ws-auth.guard.js.map