import { Controller, Get, Post } from '@nestjs/common';
export interface IUserEntity {
  id: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  role: string;
}
@Controller()
export default class UserController {
  constructor(private readonly service: UserService) {}
}
