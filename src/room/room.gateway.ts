import { CreateRoomDto } from '@@room/dtos/create-room.dto';
import { SubscribeMessage, WebSocketGateway, WsResponse } from '@nestjs/websockets';
import type { Socket } from 'socket.io';

type RoomCreatedEvent = CreateRoomDto;

@WebSocketGateway(3001, { namespace: 'room' })
export class RoomGateway {
  @SubscribeMessage('create-room')
  handleCreateRoom(socket: Socket, payload: CreateRoomDto): WsResponse<RoomCreatedEvent> {
    socket.join(payload.roomId);

    return {
      event: 'room-created',
      data: payload,
    };
  }
}
