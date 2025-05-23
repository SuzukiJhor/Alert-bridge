import { IsNotEmpty, IsUUID, IsString } from 'class-validator';
export class CreateAlertBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsString()
  category: string;
}
