import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUserEntity } from './entities/user.entity';
import { UsersModule } from './users.module';
import { randomUUID } from 'node:crypto';

@Injectable()
export class UsersService {
 

  async createUser(user: UserDto): Promise<IUserEntity> {
    const userEntity = { ...user, id: randomUUID() };
   
    return Promise.resolve(userEntity);
  }

  constructor(
    @InjectModel(UsersModule.name) private UserModel: Model<Document>,
  ) {}

  create(UserDto: UserDto) {
    const user = new this.UserModel(UserDto);
    return user.save();
  }

  findAll() {
    return this.UserModel.find();
  }

  findOne(id: string) {
    return this.UserModel.findById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.UserModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateUserDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: number) {
    return this.UserModel.deleteOne({
      _id: id,
    }).exec();

   
  }
}
