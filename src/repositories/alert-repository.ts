import { Alert } from '../entities/alert';

export abstract class AlertRepository {
  abstract create(alert: Alert): Promise<void>;
  abstract findById(id: string): Promise<Alert | null>;
  abstract findManyByRecipientId(id: string): Promise<Alert[]>;
  abstract save(alert: Alert): Promise<void>;
  abstract countManyRecipientById(recipientId: string): Promise<number>;
}
