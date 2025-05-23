import { Alert } from '../entities/alert';

export abstract class AlertRepository {
  abstract create(alert: Alert): Promise<void>;
}
