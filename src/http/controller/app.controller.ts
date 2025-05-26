import { Body, Controller, Post } from '@nestjs/common';
import { CreateAlertBody } from '../dtos/create-alert-body';
import { ExecuteAlert } from 'src/use-cases/execute-alert';
import { AlertViewModel } from '../view-models/alertViewModel';

@Controller('alert')
export class AlertsController {
  constructor(private executeAlert: ExecuteAlert) {}

  @Post()
  async create(@Body() data: CreateAlertBody) {
    const { recipientId, content, category } = data;
    const { alert } = await this.executeAlert.execute({
      recipientId,
      content,
      category,
    });
    const view = AlertViewModel.toHTTP(alert);
    return { Alert: view };
  }
}
