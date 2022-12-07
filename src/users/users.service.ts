import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUserEntity } from './entities/user.entity';
import { UsersModule } from './users.module';
import { randomUUID } from 'node:crypto';
import { PartialUserDto } from './dto/partialUserInput.dto';

@Injectable()
export class UsersService {
  private users: IUserEntity[] = [];

  async createUser(users: UserDto): Promise<IUserEntity> {
    const userEntity = { ...users, id: randomUUID() };

    return Promise.resolve(userEntity);
  }

  constructor(
    @InjectModel(UsersModule.name) private UserModel: Model<Document>,
  ) {}

  async create(UserDto: UserDto) {
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
}
