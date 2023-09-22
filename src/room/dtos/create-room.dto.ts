import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRoomDto {
  @IsString()
  @IsNotEmpty()
  readonly roomName: string;

  @IsNumber()
  @IsNotEmpty()
  readonly playerCount: 2 | 3 | 4;

  @IsNumber()
  @IsNotEmpty()
  readonly pointsToWin: 11 | 15 | 21;

  @IsNumber()
  @IsNotEmpty()
  readonly turnTimeLimit: 15 | 20 | 30;
}
