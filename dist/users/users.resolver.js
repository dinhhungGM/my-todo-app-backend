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
exports.UsersResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("../graphql");
const auth_guard_1 = require("../auth.guard");
const users_service_1 = require("./users.service");
const todos_service_1 = require("../todos/todos.service");
const common_2 = require("@nestjs/common");
const apollo_server_express_1 = require("apollo-server-express");
const argon2 = require("argon2");
let UsersResolver = class UsersResolver {
    constructor(usersService, todos_service) {
        this.usersService = usersService;
        this.todos_service = todos_service;
    }
    me(ctx) {
        console.log(ctx.user);
        return ctx.user;
    }
    getAllUsers() {
        return this.usersService.getAllUsers();
    }
    async login(newUser) {
        try {
            let user = await this.usersService.getUserByUsername(newUser.username);
            if (!user) {
                throw new apollo_server_express_1.AuthenticationError('AuthenticationError');
            }
            if (await argon2.verify(user.password, newUser.password)) {
                return this.usersService.createToken(user);
            }
            else
                throw new common_2.HttpException('Username or password is not correctly', common_2.HttpStatus.NOT_ACCEPTABLE);
        }
        catch (error) {
            throw new apollo_server_express_1.AuthenticationError('AuthenticationError');
        }
    }
    async createSingleUser(newUser) {
        console.log(newUser);
        let user = await this.usersService.findOneByUsername(newUser.username);
        if (user) {
            throw new common_2.HttpException('Username is existed', common_2.HttpStatus.NOT_ACCEPTABLE);
        }
        user = await this.usersService.createUser(newUser);
        if (user) {
            const response = {
                code: 201,
                message: 'Created successfully',
                user,
            };
            return JSON.stringify(response);
        }
        else {
            throw new common_2.HttpException('Something wrong', common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteSingleUser(id) {
        try {
            const { deletedCount } = await this.todos_service.deleteTodoByUserId(id);
            await this.usersService.deleteOneById(id);
            return `deleted account and ${deletedCount} todos`;
        }
        catch (error) {
            return 'delete failed';
        }
    }
};
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, graphql_1.Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "me", null);
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "getAllUsers", null);
__decorate([
    graphql_1.Mutation(),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "login", null);
__decorate([
    graphql_1.Mutation(),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "createSingleUser", null);
__decorate([
    graphql_1.Mutation(),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "deleteSingleUser", null);
UsersResolver = __decorate([
    graphql_1.Resolver('User'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        todos_service_1.TodosService])
], UsersResolver);
exports.UsersResolver = UsersResolver;
//# sourceMappingURL=users.resolver.js.map