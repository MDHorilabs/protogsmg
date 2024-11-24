export interface GroupConfig {
  namespace: string
  groupname: string
  passwordJoin?: string
}

export interface Member {
  username: string
  joinDate: number
  lastOnline: number
  online: boolean
}

export declare class GroupMessageManager {
  readonly group: Group
  constructor(group: Group)
  getListSegementMessages(): Promise<string[]>
  getSegmentMessage(segmentId: string): Promise<Buffer>
  static loadSegementMessage(segmentData: Buffer): Promise<any[]>
}

export declare class Group {
  readonly config: GroupConfig
  constructor(config: GroupConfig)
  members: Member[]
  messages: GroupMessageManager
}
