import { Alert } from 'src/entities/alert';
import { AlertRepository } from '../../repositories/alert-repository';
import { PrismaService } from './prisma.service';
import { Injectable } from '@nestjs/common';
import { PrismaAlertMapper } from '../mappers/prisma-alert-mapper';

@Injectable()
export class PrismaAlertsRepository implements AlertRepository {
  constructor(private prismaService: PrismaService) {}
  async create(alert: Alert): Promise<void> {
    const raw = PrismaAlertMapper.toPrisma(alert);
    await this.prismaService.alert.create({
      data: raw,
    });
  }
}
