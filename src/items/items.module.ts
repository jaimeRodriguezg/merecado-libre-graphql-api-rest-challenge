import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { CommonModule } from 'src/common/common.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [CommonModule, HttpModule],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
