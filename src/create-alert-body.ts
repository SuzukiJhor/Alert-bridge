import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateAlertBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;
  content: string;
  category: string;
}
