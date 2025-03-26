import React from 'react'
import {
  Check,
  DoubleCheck,
  Pin,
  WarningTriangle,
  Attachment,
  EditPencil,
  Reply,
} from 'iconoir-react'
import { Message } from './types'

type MessageProps = {
  message: Message
  userIsGroupAdmin: boolean
}

export const OldFlagsMessage: React.FC<MessageProps> = ({
  message,
  userIsGroupAdmin,
}) => {
  const isSent = !!message.sentAt && !message.failed
  const isDelivered = !!message.deliveredAt && !message.seenAt
  const isSeen = !!message.seenAt
  const isFailedToSend = message.failed
  const canEdit =
    message.senderId === message.currentUserId &&
    !message.deleted &&
    !message.failed

  return (
    <div className='border rounded-xl p-3 mb-3 shadow-sm bg-white'>
      <div className='flex justify-between items-center'>
        <div>
          <p className='font-medium text-gray-800'>Message ID: {message.id}</p>
          {message.isReply && (
            <div className='text-xs text-gray-500 flex items-center gap-1'>
              <Reply /> Replying to a message
            </div>
          )}
          {message.attachmentsCount > 0 && (
            <div className='text-xs text-gray-500 flex items-center gap-1'>
              <Attachment /> {message.attachmentsCount} Attachment(s)
            </div>
          )}
          <p className='text-gray-700 mt-2'>This is the message content...</p>
          {message.isEdited && (
            <span className='text-xs text-gray-400 ml-2 italic flex items-center gap-1'>
              <EditPencil /> Edited
            </span>
          )}
        </div>

        <div className='flex items-center gap-2'>
          {message.isPinned && <Pin className='text-yellow-500' />}
          {isFailedToSend && <WarningTriangle className='text-red-500' />}
          {isSeen ? (
            <DoubleCheck className='text-blue-500' />
          ) : isDelivered ? (
            <DoubleCheck className='text-gray-400' />
          ) : isSent ? (
            <Check className='text-gray-400' />
          ) : null}
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        {canEdit && (
          <button className='text-blue-600 text-xs hover:underline'>
            Edit
          </button>
        )}
        {(message.senderId === message.currentUserId || userIsGroupAdmin) &&
          !message.deleted && (
            <button className='text-red-600 text-xs hover:underline'>
              Delete
            </button>
          )}
        {isFailedToSend && (
          <button className='text-yellow-600 text-xs hover:underline'>
            Retry
          </button>
        )}
      </div>
    </div>
  )
}
