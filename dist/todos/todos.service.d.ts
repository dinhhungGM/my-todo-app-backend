import { Model } from 'mongoose';
import { TodoDocument } from './todos.schema';
import { NewTodo, UpdateTodoData } from 'src/graphql';
export declare class TodosService {
    private todoModel;
    constructor(todoModel: Model<TodoDocument>);
    getAllTodos(): Promise<TodoDocument[]>;
    getTodoById(id: string): Promise<TodoDocument>;
    getAllTodosByUserId(userId: string): Promise<TodoDocument[]>;
    updateOneTodo(todo: UpdateTodoData): Promise<TodoDocument>;
    createOneTodo(todo: NewTodo): Promise<TodoDocument>;
    deleteOneTodo(id: string): Promise<TodoDocument>;
    deleteTodoByUserId(userId: string): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
