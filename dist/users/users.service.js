"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor() {
        this.users = [];
    }
    login(createUserDto) {
        throw new Error('Method not implemented.');
    }
    async findOne(username) {
        return this.users.find(user => user.username === username);
    }
    async create(user) {
        const existingUser = await this.findOne(user.username);
        if (existingUser) {
            throw new Error('Usuário já existe');
        }
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const newUser = {
            userId: this.users.length + 1,
            username: user.username,
            password: hashedPassword,
        };
        this.users.push(newUser);
        return newUser;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map