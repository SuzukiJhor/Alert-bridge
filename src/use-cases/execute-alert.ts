import { Injectable } from '@nestjs/common';
import { Alert } from 'src/entities/alert';
import { Content } from 'src/entities/content';
import { AlertRepository } from 'src/repositories/alert-repository';
interface ExecuteAlertRequest {
  recipientId: string;
  content: string;
  category: string;
}
interface ExecuteAlertResponse {
  alert: Alert;
}
@Injectable()
export class ExecuteAlert {
  constructor(private alertRepository: AlertRepository) {}
  async execute(request: ExecuteAlertRequest): Promise<ExecuteAlertResponse> {
    const { recipientId, content, category } = request;
    const alert = new Alert({
      recipientId,
      content: new Content(content),
      category,
    });
    await this.alertRepository.create(alert);
    return { alert };
  }
}
