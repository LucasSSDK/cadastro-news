import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.sevice';

@Module({
  imports: [DatabaseModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {}
