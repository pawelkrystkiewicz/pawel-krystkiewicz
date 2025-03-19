import type { FC } from 'react'
import type { Experience } from '@/app/types'
import { calculateTimeDiff } from '@/app/utils/calculate-time-diff'
import Link from 'next/link'
import { WorkDate } from './WorkDate'
import { Divider } from './Typography'

interface ExperienceEntryProps {
  experience: Experience
  showExpTime?: boolean
}

export const ExperienceEntry: FC<ExperienceEntryProps> = ({
  experience: exp,
  showExpTime = true,
}) => {
  return (
    <div className='relative group cursor-default' key={exp.id}>
      <div className='flex justify-between gap-2'>
        <div className='col-span-2 flex flex-col'>
          <p className='text-base font-semibold '>{exp.role}</p>
          <p className='text-text-secondary'>
            <WorkDate period={exp.start} /> -{' '}
            {exp.end ? <WorkDate period={exp.end} /> : 'Present'}
          </p>
        </div>
        <div className='flex flex-col text-right'>
          <div className='flex gap-1 items-center'>
            {showExpTime && (
              <span className='text-text-secondary'>
                {calculateTimeDiff(exp.start, exp.end)} @
              </span>
            )}
            {exp.link ? (
              <Link
                href={exp.link}
                target='_blank'
                className='link-descrete micro-interactions text-base font-medium'
                title='Company website'
              >
                {exp.company}
              </Link>
            ) : (
              <span className='text-base'>{exp.company}</span>
            )}
          </div>
          <p className='text-text-secondary'>
            {exp.industry && (
              <>
                {exp.industry}{' '}
                <Divider
                  thickness={1}
                  orientation={'vertical'}
                  className='inline-block !h-3 mx-1'
                />{' '}
              </>
            )}
            {exp.location}
          </p>
        </div>
      </div>
    </div>
  )
}
