import { Paragraph } from './Typography'

interface SplittedContentProps {
  content: string
}

export const SplittedContent = ({ content }: SplittedContentProps) => {
  const [title, description] = content.split(':')
  return (
    <Paragraph>
      <span className='font-semibold'>{title}:</span> {description}
    </Paragraph>
  )
}
