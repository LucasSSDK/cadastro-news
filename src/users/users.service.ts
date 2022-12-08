import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUserEntity } from './entities/user.entity';
import { UsersModule } from './users.module';
import { randomUUID } from 'node:crypto';
import { PartialUserDto } from './dto/partialUserInput.dto';

@Injectable()
export class UsersService {
  private users: IUserEntity[] = [];
  updateUser: any;

  async createUser(users: UserDto): Promise<IUserEntity> {
    const userEntity = { ...users, id: randomUUID() };

    return Promise.resolve(userEntity);
  }


  async getAllUsers(): Promise<IUserEntity[]> {
    return this.users;
  }

  async getUserById(userId: string): Promise<IUserEntity> {
    
  }

  async UpdateUserDto(userData: PartialUserDto): Promise<IUserEntity> {
    this.users.map((user, index) => {
      if (user.id == userData.id) {
        const UpdatedUser = Object.assign(user, userData);
        this.users.splice(index, 1, UpdatedUser);
      }
    });
    const UpdatedUser = this.users.find((user) => user.id == userData.id);
    return UpdatedUser;
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
