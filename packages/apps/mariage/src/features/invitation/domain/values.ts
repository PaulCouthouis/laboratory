export type FamilyMembers = Set<string>
export type InvitationCardId = string

export type ReplyCard = {
  members: Array<{
    diet?: string
    name: string
    status: ReplyStatus
  }>
  message: string
}

type ReplyStatus = 'accept' | 'decline' | 'wait'
