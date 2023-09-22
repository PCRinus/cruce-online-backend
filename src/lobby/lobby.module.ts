import { Module } from '@nestjs/common';
import { LobbyGateway } from './lobby.gateway';
import { LobbyController } from './lobby.controller';

@Module({
  providers: [LobbyGateway],
  controllers: [LobbyController]
})
export class LobbyModule {}
