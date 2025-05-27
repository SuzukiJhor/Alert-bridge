import { Alert } from 'src/entities/alert';
import { Content } from 'src/entities/content';
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

  static toDomain(raw: {
    id: string;
    category: string;
    content: string;
    recipientId: string;
    readAt?: Date | null;
    canceledAt?: Date | null;
    createdAt: Date;
  }): Alert {
    return new Alert(
      {
        category: raw.category,
        content: new Content(raw.content),
        recipientId: raw.recipientId,
        readAt: raw.readAt,
        canceledAt: raw.canceledAt,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
