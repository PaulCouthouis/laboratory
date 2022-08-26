export interface ReplyCard {
  members: Array<{
    diet?: string
    name: string
    status: ReplyStatus
  }>
  message: string
}

type ReplyStatus = 'accept' | 'decline' | 'wait'
