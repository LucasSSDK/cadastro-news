import { UserDto } from 'users/dto/create-user.dto';
export interface IUserEntity extends UserDto {
  id: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  role: string;
}

