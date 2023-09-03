import { PlayerService } from '@@player/player.service';
import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Player')
@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post('/register-anonymous')
  async registerAnonymous() {
    return this.playerService.registerAnonymous();
  }
}
