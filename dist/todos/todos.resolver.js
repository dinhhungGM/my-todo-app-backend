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
exports.TodosResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const auth_guard_1 = require("../auth.guard");
const todos_service_1 = require("./todos.service");
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const todos_schema_1 = require("./todos.schema");
const graphql_2 = require("../graphql");
let TodosResolver = class TodosResolver {
    constructor(todos_service, users_service) {
        this.todos_service = todos_service;
        this.users_service = users_service;
    }
    async getOneTodo(id) {
        return await this.todos_service.getTodoById(id);
    }
    async createSingleTodo(newTodo) {
        return await this.todos_service.createOneTodo(newTodo);
    }
    async deleteSingleTodo(id) {
        return await this.todos_service.deleteOneTodo(id);
    }
    async updateSingleTodo(todo) {
        return await this.todos_service.updateOneTodo(todo);
    }
    async getAllTodos() {
        return await this.todos_service.getAllTodos();
    }
    async getAllTodosOfUser(userId) {
        return await this.todos_service.getAllTodosByUserId(userId);
    }
    async user(todo) {
        return await this.users_service.findOneById(todo.userId);
    }
};
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodosResolver.prototype, "getOneTodo", null);
__decorate([
    graphql_1.Mutation(() => todos_schema_1.Todo),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodosResolver.prototype, "createSingleTodo", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodosResolver.prototype, "deleteSingleTodo", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodosResolver.prototype, "updateSingleTodo", null);
__decorate([
    graphql_1.Query(() => [todos_schema_1.Todo]),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodosResolver.prototype, "getAllTodos", null);
__decorate([
    graphql_1.Query(() => [todos_schema_1.Todo]),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, graphql_1.Args('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodosResolver.prototype, "getAllTodosOfUser", null);
__decorate([
    graphql_1.ResolveField(),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todos_schema_1.Todo]),
    __metadata("design:returntype", Promise)
], TodosResolver.prototype, "user", null);
TodosResolver = __decorate([
    graphql_1.Resolver(of => todos_schema_1.Todo),
    __metadata("design:paramtypes", [todos_service_1.TodosService,
        users_service_1.UsersService])
], TodosResolver);
exports.TodosResolver = TodosResolver;
//# sourceMappingURL=todos.resolver.js.map