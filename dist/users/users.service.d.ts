import { CreateUserDto } from 'src/auth/create-user.dto';
export declare class UsersService {
    login(createUserDto: CreateUserDto): void;
    private users;
    findOne(username: string): Promise<any>;
    create(user: any): Promise<any>;
}
