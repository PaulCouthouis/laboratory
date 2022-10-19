export type FamilyMembers = Set<string>
export type InvitationCardId = string

export type ReplyCard = {
  members: Array<ReplyCardMember>
  message: string
}

export type ReplyCardMember = {
  diet?: string
  name: string
  status: ReplyStatus
}

export type ReplyStatus = 'accept' | 'decline' | 'wait'
