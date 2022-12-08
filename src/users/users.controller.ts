import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUserEntity } from './entities/user.entity';
import { PartialUserDto } from './dto/partialUserInput.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post()
  async creatUser(
    @Body() { cpf, email, idade, name, password, role }: UserDto,
  ): Promise<IUserEntity> {
    try {
      return await this.service.createUser({
        cpf,
        name,
        idade,
        email,
        password,
        role,
      });
    } catch (err) {
      console.log(err);
    }
  }

  @Patch()
  async updateUser(
    @Body() userData: PartialUserDto,
  ): Promise<IUserEntity> {
    try {
      return await this.service.updateUser(userData);
      
    } catch (err) {
      console.log(err);
    }
  }

  @Get()
  async getAllUsers(): Promise<IUserEntity[]> {
    return await this.service.getAllUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  // @Post(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.service.update(id, updateUserDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
