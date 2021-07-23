import { CanActivate, ExecutionContext } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { UsersService } from './users/users.service';
export declare class AuthGuard implements CanActivate {
    private users_service;
    constructor(users_service: UsersService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    validateToken(authToken: string): Promise<string | jwt.JwtPayload>;
}
