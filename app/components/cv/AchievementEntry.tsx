import { Achievement } from '@/app/types'
import Link from 'next/link'
import { FC } from 'react'
import Icons from '../Icons'
import clsx from 'clsx'
interface AchievementEntryProps {
  achievement: Achievement
}

export const AchievementEntry: FC<AchievementEntryProps> = ({ achievement }) => {
  return (
    <div key={achievement.company} className="flex flex-col gap-1">
      <h5 className="font-bold">
        {achievement.project && <span className="text-text-secondary">{achievement.project} @</span>}
        {achievement.company}
      </h5>
      {achievement.entries.map(entry => (
        <div
          key={entry.description}
          className={clsx('grid gap-1', entry.source ? 'grid-rows-2 print:grid-rows-1' : 'grid-rows-1')}>
          <p
            className="pl-2 before:content-['-'] before:text-text-secondary before:mr-1 row-auto"
            dangerouslySetInnerHTML={{
              __html: entry.description,
            }}
          />
          {entry.source && (
            <div className="row-start-2 justify-items-end text-right print:hidden">
              {entry.source?.map(source => (
                <Link
                  href={source.link}
                  key={source.link}
                  className="link text-sm flex items-center gap-0.5"
                  target="_blank">
                  {source.text} <Icons.Arrow className="size-3 rotate-45" />
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
