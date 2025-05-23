import { IsNotEmpty, IsUUID, IsString, Length } from 'class-validator';
export class CreateAlertBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  @IsNotEmpty()
  @IsString()
  category: string;
}
