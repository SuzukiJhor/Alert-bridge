import { AlertRepository } from 'src/repositories/alert-repository';
import { AlertNotFound } from 'src/util/alert-not-found';

interface ExecuteAlertRequest {
  alertId: string;
}
type ExecuteAlertResponse = void;

export class CancelAlert {
  constructor(private alertRepository: AlertRepository) {}

  async execute(request: ExecuteAlertRequest): Promise<ExecuteAlertResponse> {
    const { alertId } = request;
    const alert = await this.alertRepository.findById(alertId);
    if (!alert) throw new AlertNotFound();
    alert.cancel();
    await this.alertRepository.save(alert);
  }
}
