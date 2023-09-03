import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Player')
@Controller('player')
export class PlayerController {
  @Post()
  async register() {
    return 'register';
  }
}
