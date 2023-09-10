import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRoomDto {
  @IsString()
  @IsNotEmpty()
  readonly roomId: string;

  @IsNumber()
  @IsNotEmpty()
  readonly numberOfPlayers: number;

  @IsNumber()
  @IsNotEmpty()
  readonly maximumPoints: 11 | 21;
}
