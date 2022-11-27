import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Lucas:<Lucas>@news.h8f4ivx.mongodb.net/test')],
  controllers: [],
  providers: [],
})
export class AppModule {}
