import { Injectable, OnModuleInit } from '@nestjs/common';
import { init } from '@paralleldrive/cuid2';

@Injectable()
export class IdService implements OnModuleInit {
  private _cuid: () => string;

  onModuleInit() {
    this._cuid = init({
      length: 8,
      random: Math.random,
      fingerprint: 'replace-me-with-a-fingerprint-in-config-file',
    });
  }

  generateCuid(): string {
    return this._cuid();
  }
}
