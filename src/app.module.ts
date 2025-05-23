import { Module } from '@nestjs/common';
import { AlertsController } from './controller/app.controller';
import { PrismaService } from './service/prisma.service';

@Module({
  imports: [],
  controllers: [AlertsController],
  providers: [PrismaService],
})
export class AppModule {}
