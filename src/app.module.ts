import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { PrismaService } from './service/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
