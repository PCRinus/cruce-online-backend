import { IdService } from '@@shared/id/id.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayerService {
  constructor(private readonly idService: IdService) {}

  registerAnonymous(): string {
    const cuid = this.idService.generateCuid();

    return `Anonymous-${cuid}`;
  }
}
