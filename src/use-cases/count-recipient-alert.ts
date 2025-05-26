import { AlertRepository } from 'src/repositories/alert-repository';

interface CountRecipientAlertRequest {
  recipientId: string;
}
interface CountRecipientAlertResponse {
  count: number;
}

export class CountAlert {
  constructor(private alertRepository: AlertRepository) {}

  async execute(
    request: CountRecipientAlertRequest,
  ): Promise<CountRecipientAlertResponse> {
    const { recipientId } = request;
    const count =
      await this.alertRepository.countManyRecipientById(recipientId);
    return { count };
  }
}
