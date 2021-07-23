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
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const todos_schema_1 = require("./todos.schema");
const graphql_1 = require("../graphql");
let TodosService = class TodosService {
    constructor(todoModel) {
        this.todoModel = todoModel;
    }
    async getAllTodos() {
        return await this.todoModel.find();
    }
    async getTodoById(id) {
        return await this.todoModel.findById(id);
    }
    async getAllTodosByUserId(userId) {
        return await this.todoModel.find({ userId: userId });
    }
    async updateOneTodo(todo) {
        return await this.todoModel.findByIdAndUpdate(todo._id, { title: todo.title, description: todo.description });
    }
    async createOneTodo(todo) {
        return await this.todoModel.create(todo);
    }
    async deleteOneTodo(id) {
        return await this.todoModel.findByIdAndDelete(id);
    }
    async deleteTodoByUserId(userId) {
        return (await this.todoModel.deleteMany({ userId }));
    }
};
TodosService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(todos_schema_1.Todo.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TodosService);
exports.TodosService = TodosService;
//# sourceMappingURL=todos.service.js.map