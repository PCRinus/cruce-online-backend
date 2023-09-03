import { Module } from '@nestjs/common';
import { PlayerModule } from './player/player.module';
import { RoomModule } from './room/room.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [PlayerModule, RoomModule, SharedModule],
})
export class AppModule {}
