import { Alert } from 'src/entities/alert';
import { AlertRepository } from '../../repositories/alert-repository';
import { PrismaService } from './prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaAlertsRepository implements AlertRepository {
  constructor(private prismaService: PrismaService) {}
  async create(alert: Alert): Promise<void> {
    await this.prismaService.alert.create({
      data: {
        id: alert.id,
        recipientId: alert.recipientId,
        category: alert.category,
        content: alert.content.value,
        readAt: alert.readAt,
      },
    });
  }
}
