import { Module } from '@nestjs/common';
import { PlayerModule } from './player/player.module';
import { RoomModule } from './room/room.module';
import { SharedModule } from './shared/shared.module';
import { GameModule } from './game/game.module';
import { LobbyModule } from './lobby/lobby.module';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    PlayerModule,
    RoomModule,
    SharedModule,
    GameModule,
    LobbyModule,
    LoggerModule.forRoot({
      pinoHttp: {
        customProps: () => ({
          context: 'HTTP',
        }),
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true,
          },
        },
      },
    }),
  ],
})
export class AppModule {}
