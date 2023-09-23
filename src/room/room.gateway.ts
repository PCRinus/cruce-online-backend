import { CreateRoomDto } from '@@room/dtos/create-room.dto';
import { IdService } from '@@shared/id/id.service';
import { Logger } from '@nestjs/common';
import { OnGatewayConnection, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import type { Server, Socket } from 'socket.io';

// type RoomCreatedEvent = CreateRoomDto;

type Room = {
  id: string;
  roomName: string;
  currentPlayerCount: number;
  maxPlayerCount: number;
  pointsToWin: number;
  turnTimeLimit: number;
};

@WebSocketGateway({ namespace: 'room', cors: true })
export class RoomGateway implements OnGatewayConnection{
  @WebSocketServer()
  private readonly server: Server;

  private readonly logger = new Logger(RoomGateway.name);
  private rooms: Room[] = [];

  constructor(private readonly idService: IdService) {}

  handleConnection(client: Socket) {
    this.logger.log('New client connected', client.id);

    this.server.emit('rooms', this.rooms)
  }

  @SubscribeMessage('create-room')
  handleCreateRoom(socket: Socket, payload: CreateRoomDto) {
    this.logger.log('create-room', socket.id, payload);

    this.rooms.push({
      id: this.idService.generateCuid(),
      roomName: payload.roomName,
      currentPlayerCount: 1,
      maxPlayerCount: payload.playerCount,
      pointsToWin: payload.pointsToWin,
      turnTimeLimit: payload.turnTimeLimit,
    } satisfies Room);

    this.server.emit('rooms', this.rooms);
  }
}
