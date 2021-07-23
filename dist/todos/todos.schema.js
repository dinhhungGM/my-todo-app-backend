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
exports.TodoSchema = exports.Todo = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const users_schema_1 = require("../users/users.schema");
let Todo = class Todo {
};
__decorate([
    graphql_1.Field(() => graphql_1.ID),
    __metadata("design:type", String)
], Todo.prototype, "_id", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    graphql_1.Field(),
    __metadata("design:type", String)
], Todo.prototype, "title", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    graphql_1.Field(),
    __metadata("design:type", String)
], Todo.prototype, "description", void 0);
__decorate([
    mongoose_1.Prop({ type: mongoose.Schema.Types.ObjectId, ref: users_schema_1.User.name }),
    graphql_1.Field(),
    __metadata("design:type", String)
], Todo.prototype, "userId", void 0);
Todo = __decorate([
    mongoose_1.Schema(),
    graphql_1.ObjectType()
], Todo);
exports.Todo = Todo;
exports.TodoSchema = mongoose_1.SchemaFactory.createForClass(Todo);
//# sourceMappingURL=todos.schema.js.map