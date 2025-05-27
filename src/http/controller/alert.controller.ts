import { Body, Controller, Post, Patch, Param, Get } from '@nestjs/common';
import { CreateAlertBody } from '../dtos/create-alert-body';
import { ExecuteAlert } from 'src/use-cases/execute-alert';
import { AlertViewModel } from '../view-models/alertViewModel';
import { CancelAlert } from 'src/use-cases/cancel-alert';
import { ReadtAlert } from 'src/use-cases/read-alert';
import { CountAlert } from 'src/use-cases/count-recipient-alert';

@Controller('alert')
export class AlertsController {
  constructor(
    private executeAlert: ExecuteAlert,
    private cancelAlert: CancelAlert,
    private readAlert: ReadtAlert,
    private countRecipientAlert: CountAlert,
  ) {}

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelAlert.execute({
      alertId: id,
    });
  }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readAlert.execute({
      alertId: id,
    });
  }

  @Get('count/:recipientId')
  async countRecipient(@Param('recipientId') recipientId: string) {
    const { count } = await this.countRecipientAlert.execute({
      recipientId,
    });
    return { count };
  }

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
