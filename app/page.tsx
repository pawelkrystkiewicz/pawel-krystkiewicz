import Link from 'next/link'
import config from '../config'
import { Paragraph } from './components/cv/Typography'
import achievementsData from './components/cv/achievements.data'
import { AchievementEntry } from './components/cv/AchievementEntry'
import { PostedArticles } from './components/Posts'
import Icons from './components/Icons'

const { title, description, flags, totalExperience } = config

export default function Page() {
  return (
    <section className='flex flex-col gap-4'>
      <div className='flex flex-col gap-1'>
        <h1 className='text-3xl font-extrabold tracking-tighter'>{title}</h1>
        <p className='mb-8'>{description}</p>
      </div>
      <Paragraph className='mb-4 text-lg'>
        I'm a web developer with {totalExperience} years of experience crafting
        well designed and impactful applications. Specializing in React,
        TypeScript with a good eye for modern UI/UX.
        {flags.cui && (
          <>
            {' '}
            Author of{' '}
            <Link
              href='https://www.creation-ui.com'
              target='_blank'
              className='link'
            >
              Creation UI
            </Link>{' '}
            design system.
          </>
        )}
      </Paragraph>
      <Paragraph className='text-lg'>
        Want to build something together? Check if we are a good fit{' '}
        <Link href='/cv' className='link'>
          here
        </Link>
      </Paragraph>

      <div className='my-8'>
        <h2 className='font-semibold text-xl mb-4 flex items-center gap-2'>
          <Icons.Trophy />
          Latest Wins
        </h2>
        <AchievementEntry achievement={achievementsData[0]} />
      </div>
      {flags.articles && (
        <div className='my-8'>
          <h2 className='font-semibold text-xl mb-4 flex items-center gap-2'>
            <Icons.Article />
            <Link href='/articles' className='link-discrete'>
              Articles
            </Link>
          </h2>
          <PostedArticles />
        </div>
      )}
    </section>
  )
}
