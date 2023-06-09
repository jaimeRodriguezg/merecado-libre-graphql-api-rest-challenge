import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { CommonModule } from './common/common.module';
import { ItemsModule } from './items/items.module';
import { SearcherModule } from './searcher/searcher.module';

@Module({
  imports: [
    //Config .env
    ConfigModule.forRoot(),

    //Axios config
    HttpModule,

    //Modules
    CommonModule,

    ItemsModule,

    SearcherModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
