import { PrismaService } from 'src/prisma/prisma.sevice';

import { IUserEntity } from './entities/user.entity';
import { PartialUserDto } from './dto/partialUserInput.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(user: IUserEntity): Promise<IUserEntity> {
    const CreatedUser = await this.prisma.user.create({ data: user });
    return CreatedUser;
  }

  async updateUser(user: PartialUserDto): Promise<IUserEntity> {
    const UpdatedUser = await this.prisma.user.update({
      where: { id: user.id },
      data: user,
    });
    return UpdatedUser;
  }

  async deleteUser(id: string): Promise<IUserEntity> {
    const deletedUser = await this.prisma.user.delete({
      where: { id: id },
    });
    return deletedUser;
  }

  async findAllUser(): Promise<IUserEntity[]> {
    const allUsers = await this.prisma.user.findMany();
    return allUsers;
  }

  async findUserById(id: string): Promise<IUserEntity> {
    const foundedUser = await this.prisma.user.findUniqueOrThrow({
      where: { id: id },
    });
    return foundedUser;
  }
}
