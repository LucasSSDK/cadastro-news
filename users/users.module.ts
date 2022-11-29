import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { IUserEntity } from './entities/user.entity';

@Module({
  imports: [
    
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
