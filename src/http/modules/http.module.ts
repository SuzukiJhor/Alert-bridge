import { Module } from '@nestjs/common';
import { AlertsController } from 'src/http/controller/app.controller';

@Module({
  imports: [],
  controllers: [AlertsController],
  providers: [],
})
export class HttpModule {}
