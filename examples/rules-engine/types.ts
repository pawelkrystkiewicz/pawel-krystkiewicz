export type Rules<
  A = any,
  K extends string | number | symbol = string,
> = Record<K, (props: A) => boolean>

export type Flags<K extends string | number | symbol = string> = Record<
  K,
  boolean
>

/****/

export type Message = {
  id: string
  senderId: string
  recipientId: string
  sentAt: Date
  deliveredAt?: Date
  seenAt?: Date
  deleted: boolean
  failed: boolean
  attachmentsCount: number
  isPinned: boolean
  isEdited: boolean
  isReply: boolean
  isGroupMessage: boolean
  currentUserId: string
}

export type MessageRulesArgs = {
  message: Message
  userIsGroupAdmin: boolean
}

export type MessageRuleSet = {
  isSent: boolean
  isDelivered: boolean
  isSeen: boolean
  canEdit: boolean
  showPinnedIcon: boolean
  showEditedIndicator: boolean
  showReplyPreview: boolean
  showAttachmentIcon: boolean
  showFailedIcon: boolean
  showDeleteButton: boolean
}

export type MessageRules = Rules<MessageRulesArgs, keyof MessageRuleSet>