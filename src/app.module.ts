import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:admin@usernews.radqjuj.mongodb.net/test')],
  controllers: [],
  providers: [],
})
export class AppModule {}
