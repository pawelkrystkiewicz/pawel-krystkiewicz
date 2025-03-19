import { Achievement } from '@/app/types'
import { FC } from 'react'

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
        <p
          key={entry.description}
          className="pl-2 before:content-['-'] before:text-text-secondary before:mr-1"
          dangerouslySetInnerHTML={{
            __html: entry.description,
          }}
        />
      ))}
    </div>
  )
}
