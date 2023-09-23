import { Logger } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: 'lobby', cors: true })
export class LobbyGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  private readonly server: Server;

  private readonly logger = new Logger(LobbyGateway.name);
  private playerCount = 0;

  constructor() {}

  handleConnection(client: Socket) {
    this.logger.log('New client connected', client.id);

    this.playerCount++;

    this.server.emit('player-count', { playerCount: this.playerCount });
  }

  handleDisconnect(client: Socket) {
    this.logger.log('Client disconnected', client.id);

    this.playerCount--;

    this.server.emit('player-count', { playerCount: this.playerCount });
  }

  async getPlayerCount(): Promise<number> {
    return this.playerCount;
  }
}
