import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://andre:<andre123>@scryfall-cards.jwhau.mongodb.net/?retryWrites=true&w=majority&appName=ScryFall-Cards') 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
