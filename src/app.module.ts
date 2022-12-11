import { Module } from '@nestjs/common';
import { DatabaseModule } from './prisma/database.module';
import { PrismaService } from './prisma/prisma.sevice';
import { UsersController } from './users/users.controller';
import { UserRepository } from './users/users.repository';
import { UsersService } from './users/users.service';
@Module({
    imports: [ 
      DatabaseModule
    ],
    controllers: [UsersController],
    providers: [UsersService, UserRepository],
  })

export class AppModule {}
