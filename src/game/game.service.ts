import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {
  constructor() {}

  setupGame(): string {
    return '';
  }

  shuffleCards() {}
}
