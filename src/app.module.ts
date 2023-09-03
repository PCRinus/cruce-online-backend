import { Module } from '@nestjs/common';
import { PlayerModule } from './player/player.module';
import { RoomModule } from './room/room.module';

@Module({
  imports: [PlayerModule, RoomModule],
})
export class AppModule {}
