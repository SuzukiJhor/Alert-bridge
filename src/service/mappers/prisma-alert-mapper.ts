import { Alert } from 'src/entities/alert';

export class PrismaAlertMapper {
  static toPrisma(alert: Alert) {
    return {
      id: alert.id,
      recipientId: alert.recipientId,
      category: alert.category,
      content: alert.content.value,
      readAt: alert.readAt,
      createdAt: alert.createdAt,
    };
  }
}
