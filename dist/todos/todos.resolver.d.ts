import { TodosService } from './todos.service';
import { UsersService } from 'src/users/users.service';
import { Todo } from './todos.schema';
import { NewTodo, UpdateTodoData } from 'src/graphql';
export declare class TodosResolver {
    private todos_service;
    private users_service;
    constructor(todos_service: TodosService, users_service: UsersService);
    getOneTodo(id: string): Promise<import("./todos.schema").TodoDocument>;
    createSingleTodo(newTodo: NewTodo): Promise<import("./todos.schema").TodoDocument>;
    deleteSingleTodo(id: string): Promise<import("./todos.schema").TodoDocument>;
    updateSingleTodo(todo: UpdateTodoData): Promise<import("./todos.schema").TodoDocument>;
    getAllTodos(): Promise<import("./todos.schema").TodoDocument[]>;
    getAllTodosOfUser(userId: string): Promise<import("./todos.schema").TodoDocument[]>;
    user(todo: Todo): Promise<import("../users/users.schema").UserDocument>;
}
