import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import {PrismaService} from './prisma/prisma.sevice'

@Module({
    imports: [UsersModule],
    controllers: [],
    providers: [PrismaService]
  })

export class AppModule {}
