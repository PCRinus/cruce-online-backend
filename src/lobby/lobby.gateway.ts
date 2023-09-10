import { OnGatewayConnection, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway()
export class LobbyGateway implements OnGatewayConnection {
  constructor() {}

  handleConnection(client: any, ...args: any[]) {
    throw new Error('Method not implemented.');
  }
}
