import { Client } from "./client"
import { Group } from "./group"

export interface ServerConfig {
  namespace: string
  host: string,
  port: number,
  IPv6Only: boolean
}

export interface ServerGroupManager {
  getAllGroups(): Promise<Group[]>
}

export declare class GSMGServer {
  groups: ServerGroupManager
  clients: Client[]
  constructor(config: ServerConfig)
  loadGroups(): Promise<ServerGroupManager>
}
