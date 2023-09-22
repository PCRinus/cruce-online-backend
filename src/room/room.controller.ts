import { CreateRoomDto } from '@@room/dtos/create-room.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Room')
@Controller('room')
export class RoomController {
  constructor() {}

  @Post()
  async createRoom(@Body() body: CreateRoomDto): Promise<any> {
    const { roomName, playerCount, pointsToWin, turnTimeLimit } = body;
    console.log(roomName, playerCount, pointsToWin, turnTimeLimit);

    return {
      roomName,
      playerCount,
      pointsToWin,
      turnTimeLimit,
    };
  }
}
