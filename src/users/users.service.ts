import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUserEntity } from './entities/user.entity';
import { UsersModule } from './users.module';
import { randomUUID } from 'node:crypto';
import { PartialUserDto } from './dto/partialUserInput.dto';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}
  private users: IUserEntity[] = [];
  updateUser: any;

  async createUser(users: UserDto): Promise<IUserEntity> {
    const userEntity = { ...users, id: randomUUID() };
    const createdUser = await this.userRepository.createUser(userEntity)

    return createdUser;
  }


  async getAllUsers(): Promise<IUserEntity[]> {
    return await this.userRepository.findAllUser();
  }

  async getUserById(userId: string): Promise<IUserEntity> {
    const existeUser = this.users.find((user) => user.id == userId);
  if (!existeUser) {
    throw new Error('Usuario não encontrado')
    }
    return existeUser;
  }

  async UpdateUserDto(userData: PartialUserDto): Promise<IUserEntity> {
    const updatedUser = await this.userRepository.updateUser(userData)
    return updatedUser;
  }

 async deleteUserById(userId: string): Promise<boolean> {
  const existeUser = this.users.find((user) => user.id == userId);
  if (!existeUser) {
    return false;
  }
    
    this.users.map((user, index) => {
      if (user.id == userId) {
        this.users.splice(index, 1);
      }
    });
    return true;
  } 
 
}
