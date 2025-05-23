import { Alert } from 'src/entities/alert';

export class AlertViewModel {
  static toHTTP(alert: Alert) {
    return {
      id: alert.id,
      category: alert.category,
      content: alert.content.value,
      recipientId: alert.recipientId,
    };
  }
}
