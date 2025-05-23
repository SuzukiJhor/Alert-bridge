import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AlertRepository } from 'src/repositories/alert-repository';
import { PrismaAlertsRepository } from '../prisma/prisma-alerts-repository';
@Module({
  providers: [
    PrismaService,
    {
      provide: AlertRepository,
      useClass: PrismaAlertsRepository,
    },
  ],
  exports: [AlertRepository],
})
export class DatabaseModule {}
