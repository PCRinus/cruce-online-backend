import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LobbyGateway } from 'src/lobby/lobby.gateway';

@ApiTags('Lobby')
@Controller('lobby')
export class LobbyController {
  constructor(private readonly lobbyGateway: LobbyGateway) {}

  @Get('player-count')
  async getPlayerCount(): Promise<number> {
    return this.lobbyGateway.getPlayerCount();
  }
}
