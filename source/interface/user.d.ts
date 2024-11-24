import { Client } from "./client"

export interface UserConfig {
  username: string
  servers: string[]
}

export declare class User {
  client: Client
  constructor(config: UserConfig)
}
