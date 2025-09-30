import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CookingDurationsController } from './cooking-durations.controller';
import { CookingDurationsService } from './cooking-durations.service';
import { CookingDuration } from './entities/cooking-duration.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CookingDuration])],
  controllers: [CookingDurationsController],
  providers: [CookingDurationsService],
})
export class CookingDurationsModule { }