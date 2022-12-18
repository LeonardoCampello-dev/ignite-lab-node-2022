import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  public recipientId: string;

  @IsNotEmpty()
  @Length(5, 250)
  public content: string;

  @IsNotEmpty()
  public category: string;
}
