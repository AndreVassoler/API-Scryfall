import { UsersService } from '../users/users.service';
import { CreateUserDto } from './create-user.dto';
export declare class AuthController {
    private usersService;
    constructor(usersService: UsersService);
    register(createUserDto: CreateUserDto): Promise<any>;
}
