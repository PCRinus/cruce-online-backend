import { PlayerService } from '@@player/player.service';
import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Player')
@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get('/count')
  async getPlayerCount() {
    return 123;
  }

  @Post('/register-anonymous')
  async registerAnonymous() {
    return this.playerService.registerAnonymous();
  }
}
