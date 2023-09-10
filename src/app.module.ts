import { Module } from '@nestjs/common';
import { PlayerModule } from './player/player.module';
import { RoomModule } from './room/room.module';
import { SharedModule } from './shared/shared.module';
import { GameModule } from './game/game.module';
import { LobbyModule } from './lobby/lobby.module';

@Module({
  imports: [PlayerModule, RoomModule, SharedModule, GameModule, LobbyModule],
})
export class AppModule {}
