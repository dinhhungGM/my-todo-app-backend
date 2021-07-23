import { NewUser } from 'src/graphql';
import { UsersService } from './users.service';
import { TodosService } from 'src/todos/todos.service';
export declare class UsersResolver {
    private usersService;
    private todos_service;
    constructor(usersService: UsersService, todos_service: TodosService);
    me(ctx: any): any;
    getAllUsers(): Promise<import("./users.schema").UserDocument[]>;
    login(newUser: NewUser): Promise<string>;
    createSingleUser(newUser: NewUser): Promise<string>;
    deleteSingleUser(id: string): Promise<string>;
}
