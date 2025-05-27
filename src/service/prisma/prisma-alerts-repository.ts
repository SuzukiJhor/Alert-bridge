import { Alert } from 'src/entities/alert';
import { AlertRepository } from '../../repositories/alert-repository';
import { PrismaService } from './prisma.service';
import { Injectable } from '@nestjs/common';
import { PrismaAlertMapper } from '../mappers/prisma-alert-mapper';

@Injectable()
export class PrismaAlertsRepository implements AlertRepository {
  constructor(private prismaService: PrismaService) {}

  async findManyByRecipientId(recipientId: string): Promise<Alert[]> {
    const alerts = await this.prismaService.alert.findMany({
      where: { recipientId: recipientId, canceledAt: null },
      orderBy: { createdAt: 'desc' },
    });
    return alerts.map((alerts) => {
      return PrismaAlertMapper.toDomain(alerts);
    });
  }

  async findById(alertid: string): Promise<Alert | null> {
    const alert = await this.prismaService.alert.findUnique({
      where: { id: alertid },
    });
    if (!alert) return null;
    return PrismaAlertMapper.toDomain(alert);
  }

  async save(alert: Alert): Promise<void> {
    const raw = PrismaAlertMapper.toPrisma(alert);
    await this.prismaService.alert.update({
      where: { id: raw.id },
      data: raw,
    });
  }
  async countManyRecipientById(recipientId: string): Promise<number> {
    const count = this.prismaService.alert.count({
      where: { recipientId, readAt: null, canceledAt: null },
    });
    return count;
  }

  async create(alert: Alert): Promise<void> {
    const raw = PrismaAlertMapper.toPrisma(alert);
    await this.prismaService.alert.create({ data: raw });
  }
}
