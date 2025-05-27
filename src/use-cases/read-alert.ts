import { AlertRepository } from 'src/repositories/alert-repository';
import { AlertNotFound } from 'src/util/alert-not-found';

interface ReadAlertRequest {
  alertId: string;
}
type ExecuteAlertResponse = void;

export class ReadtAlert {
  constructor(private alertRepository: AlertRepository) {}

  async execute(request: ReadAlertRequest): Promise<ExecuteAlertResponse> {
    const { alertId } = request;
    const alert = await this.alertRepository.findById(alertId);
    if (!alert) throw new AlertNotFound();
    alert.read();
    await this.alertRepository.save(alert);
  }
}
