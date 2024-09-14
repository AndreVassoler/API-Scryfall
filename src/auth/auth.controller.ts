import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from './create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private usersService: UsersService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.usersService.create(createUserDto);
    } catch (error) {
      throw new BadRequestException('Usuário já existe ou dados inválidos');
    }
  }
}
