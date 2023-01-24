import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        try {
            const authHeader = request.headers.authorization as string;

            if (this.isValidBearerTokenValue(authHeader)) {
                throw new UnauthorizedException({
                    message: 'Пользователь неавторизован',
                });
            }

            const token = this.getTokenFromHeader(authHeader);

            const user = this.jwtService.verify(token);
            request.user = user;
            return true;
        } catch (e) {
            throw new UnauthorizedException({
                message: 'Пользователь не авторизован',
            });
        }
    }

    private getTokenFromHeader(authHeader: string) {
        return this.getBearerToken(authHeader)[1];
    }

    private getBearerToken(authHeader: string) {
        return authHeader.split(' ');
    }

    private isValidBearerTokenValue(authHeader: string) {
        const [bearer, token] = this.getBearerToken(authHeader);
        return bearer !== 'Bearer' || !token;
    }
}
