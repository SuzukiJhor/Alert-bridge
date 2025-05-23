import { Alert } from 'src/entities/alert';
import { Content } from 'src/entities/content';

interface ExecuteAlertRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface ExecuteAlertResponse {
  alert: Alert;
}

export class ExecuteAlert {
  execute(request: ExecuteAlertRequest): ExecuteAlertResponse {
    const { recipientId, content, category } = request;
    const alert = new Alert({
      recipientId,
      content: new Content(content),
      category,
    });
    return { alert };
  }
}
