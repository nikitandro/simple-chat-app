import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
export declare class JwtAuthGuard implements CanActivate {
    private jwtService;
    constructor(jwtService: JwtService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    private getTokenFromHeader;
    private getBearerToken;
    private isValidBearerTokenValue;
}
