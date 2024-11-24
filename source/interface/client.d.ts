import { WebSocket } from "ws"
import { UserConfig } from "./user"

export declare class Client {
  socket: WebSocket
  constructor(userConfig: UserConfig, socket?: WebSocket)
}
