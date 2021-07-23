import { UserDocument } from './users.schema';
import { Model } from 'mongoose';
import { NewUser } from 'src/graphql';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    getAllUsers(): Promise<UserDocument[]>;
    getUserByUsername(username: string): Promise<UserDocument>;
    createUser(newUser: NewUser): Promise<UserDocument>;
    findOneById(id: any): Promise<UserDocument>;
    findOneByUsername(username: string): Promise<UserDocument>;
    deleteOneById(id: any): Promise<UserDocument>;
    createToken(user: any): string;
}
