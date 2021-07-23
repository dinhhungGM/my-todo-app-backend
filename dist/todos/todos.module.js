"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosModule = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const todos_resolver_1 = require("./todos.resolver");
const todos_service_1 = require("./todos.service");
const mongoose_1 = require("@nestjs/mongoose");
const users_schema_1 = require("../users/users.schema");
const todos_schema_1 = require("./todos.schema");
let TodosModule = class TodosModule {
};
TodosModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: users_schema_1.User.name, schema: users_schema_1.UserSchema },
                { name: todos_schema_1.Todo.name, schema: todos_schema_1.TodoSchema }
            ])
        ],
        providers: [todos_service_1.TodosService, todos_resolver_1.TodosResolver, users_service_1.UsersService]
    })
], TodosModule);
exports.TodosModule = TodosModule;
//# sourceMappingURL=todos.module.js.map