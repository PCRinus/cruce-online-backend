import { Module } from '@nestjs/common';
import { RoomController } from './room.controller';
import { RoomGateway } from './room.gateway';

@Module({
  controllers: [RoomController],
  providers: [RoomGateway]
})
export class RoomModule {}
