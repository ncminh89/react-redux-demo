import { Module } from '@nestjs/common';
import { PhasesModule } from './phases/phases.module';

@Module({
  imports: [
    PhasesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
