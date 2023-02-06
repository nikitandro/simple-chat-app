import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class WsGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.getArgs()[0].handshake;
        try {
            const authHeader = request.headers.authorization as string;

            const [bearer, token] = authHeader.split(' ');

            if (bearer !== 'Bearer')
                throw new UnauthorizedException({
                    message: 'Пользователь не авторизован',
                });

            const user = this.jwtService.verify(token);
            request.user = user;
            return true;
        } catch (e) {
            return false;
        }
    }
}
