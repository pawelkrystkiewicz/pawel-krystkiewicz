import type { MessageRules } from '../types'

export const messageRules: MessageRules = {
  isSent: ({ message: m }) => !!m.sentAt && !m.failed,
  isDelivered: ({ message: m }) => !!m.deliveredAt && !m.seenAt,
  isSeen: ({ message: m }) => !!m.seenAt,
  canEdit: ({ message: m }) =>
    m.senderId === m.currentUserId && !m.deleted && !m.failed,
  showPinnedIcon: ({ message: m }) => m.isPinned,
  showEditedIndicator: ({ message: m }) => m.isEdited,
  showReplyPreview: ({ message: m }) => m.isReply,
  showAttachmentIcon: ({ message: m }) => m.attachmentsCount > 0,
  showFailedIcon: ({ message: m }) => m.failed,
  showDeleteButton: ({ message: m }) =>
    m.senderId === m.currentUserId && !m.deleted,
}
