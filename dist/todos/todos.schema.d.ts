import * as mongoose from 'mongoose';
export declare type TodoDocument = Todo & mongoose.Document;
export declare class Todo {
    _id: string;
    title: string;
    description: string;
    userId: string;
}
export declare const TodoSchema: mongoose.Schema<mongoose.Document<Todo, any, any>, mongoose.Model<any, any, any>, undefined, any>;
