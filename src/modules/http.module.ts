import { Alert } from '@mantine/core';
import { Module } from '@nestjs/common';
import { AlertsController } from 'src/controller/app.controller';

@Module({
  imports: [],
  controllers: [AlertsController],
  providers: [],
})
export class HttpModule {}
