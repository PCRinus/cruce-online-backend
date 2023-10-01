import { PlayerService } from '@@player/player.service';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Player')
@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get('/count')
  async getPlayerCount() {
    return 123;
  }

  @Get('/register-anonymous')
  async registerAnonymous() {
    return this.playerService.registerAnonymous();
  }
}
