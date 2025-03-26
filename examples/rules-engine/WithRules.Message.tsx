import {
  Attachment,
  Check,
  DoubleCheck,
  EditPencil,
  Pin,
  Reply,
  WarningTriangle,
} from 'iconoir-react'
import React from 'react'
import { messageRules } from './rules/rules'
import { useRules } from './rules/rules-hook'
import { Message, MessageRules, MessageRulesArgs } from './types'

type MessageProps = {
  message: Message
  userIsGroupAdmin: boolean
}

export const WithRulesMessage: React.FC<MessageProps> = ({
  message,
  userIsGroupAdmin,
}) => {
  const {
    isSent,
    isDelivered,
    isSeen,
    canEdit,
    showPinnedIcon,
    showEditedIndicator,
    showReplyPreview,
    showAttachmentIcon,
    showFailedIcon,
    showDeleteButton,
  } = useRules<MessageRules, MessageRulesArgs>(messageRules, {
    message,
    userIsGroupAdmin,
  })

  return (
    <div className='border rounded-xl p-3 mb-3 shadow-sm bg-white'>
      <div className='flex justify-between items-center'>
        <div>
          <p className='font-medium text-gray-800'>Message ID: {message.id}</p>
          {showReplyPreview && (
            <div className='text-xs text-gray-500 flex items-center gap-1'>
              <Reply /> Replying to a message
            </div>
          )}
          {showAttachmentIcon && (
            <div className='text-xs text-gray-500 flex items-center gap-1'>
              <Attachment /> {message.attachmentsCount} Attachment(s)
            </div>
          )}
          <p className='text-gray-700 mt-2'>This is the message content...</p>
          {showEditedIndicator && (
            <span className='text-xs text-gray-400 ml-2 italic flex items-center gap-1'>
              <EditPencil /> Edited
            </span>
          )}
        </div>

        <div className='flex items-center gap-2'>
          {showPinnedIcon && <Pin className='text-warning' />}
          {showFailedIcon && <WarningTriangle className='text-error' />}
          {isSeen ? (
            <DoubleCheck className='text-primary' />
          ) : isDelivered ? (
            <DoubleCheck className='text-text-secondary' />
          ) : isSent ? (
            <Check className='text-text-secondary' />
          ) : null}
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        {canEdit && (
          <button className='text-primary text-xs hover:underline'>
            Edit
          </button>
        )}
        {showDeleteButton && (
          <button className='text-error text-xs hover:underline'>
            Delete
          </button>
        )}
        {showFailedIcon && (
          <button className='text-warning text-xs hover:underline'>
            Retry
          </button>
        )}
      </div>
    </div>
  )
}
