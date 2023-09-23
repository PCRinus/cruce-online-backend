import { Test, TestingModule } from '@nestjs/testing';
import { RoomGateway } from './room.gateway';
import { IdService } from '@@shared/id/id.service';

describe('RoomGateway', () => {
  let gateway: RoomGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoomGateway, IdService],
    }).compile();

    gateway = module.get<RoomGateway>(RoomGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
