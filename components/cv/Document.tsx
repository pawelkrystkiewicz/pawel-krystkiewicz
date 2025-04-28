import education from '@/components/cv/education.data'
import experience from '@/components/cv/experience.data'
import { about, personality, skills } from '@/components/cv/sidebar.data'
import config from '@/config'
import clsx from 'clsx'
import Link from 'next/link'
import Icons from '../Icons'
import { ExperienceEntry } from './ExperienceEntry'
import { Section } from './Section'
import { SplittedContent } from './SplitedContent'
import { Divider, Paragraph } from './Typography'
const { name, email, linkedin, github, phone } = config

const DEBUG = false
const GAPS = 'gap-y-6 gap-x-10'
const SIDEBAR_WIDTH = 'min-w-[30%] w-[30%]'

export const Document = () => {
  return (
    <>
      <div
        className={clsx('print:p-5 flex flex-col text-sm rounded-[1px]', GAPS)}
        id='printable'
        style={{
          maxWidth: '210mm',
        }}
      >
        {DEBUG && (
          <div
            className='absolute top-0 left-0 border border-error print:hidden'
            style={{
              height: '297mm',
              width: '210mm',
            }}
          />
        )}
        <header
          className={clsx(
            'border-b-2 border-border pb-4 mb-4 grid grid-cols-1 md:grid-cols-3 col-span-1 md:col-span-3',
            GAPS,
          )}
        >
          <div className='text-4xl  font-extrabold'>{name}</div>
          <div className='text-xl self-end'>
            Software
            <br /> Engineer
          </div>
          <div className='mt-2 text-gray-700 flex flex-col justify-between'>
            <Link
              href={`tel:${phone}`}
              target='_blank'
              className='whitespace-nowrap flex items-center gap-1'
            >
              <Icons.Phone /> {phone}
            </Link>
            <Link
              href={`mailto:${email}`}
              target='_blank'
              className='whitespace-nowrap flex items-center gap-1'
            >
              <Icons.Email /> {email}
            </Link>
            <Link
              href={linkedin}
              target='_blank'
              className='whitespace-nowrap flex items-center gap-1'
            >
              <Icons.LinkedIn /> LinkedIn
            </Link>
          </div>
        </header>
        <div className={clsx('flex gap-10', GAPS)}>
          <div className={clsx('flex flex-col', SIDEBAR_WIDTH, GAPS)}>
            <Section title='about' className=''>
              <div className='flex flex-col gap-2'>
                {about.map(paragraph => (
                  <Paragraph key={paragraph}>{paragraph}</Paragraph>
                ))}
                {config.flags.cui && (
                  <Paragraph>
                    <>
                      Author of{' '}
                      <Link
                        href={'https://www.creation-ui.com'}
                        target='_blank'
                        className='link-discrete not-[print]:underline'
                      >
                        Creation UI
                      </Link>{' '}
                      design system.
                    </>
                  </Paragraph>
                )}
              </div>
            </Section>
            <Section title='skills'>
              <div className='flex flex-col gap-1 text-pretty'>
                {skills.map(entry => (
                  <SplittedContent key={entry} content={entry} />
                ))}
              </div>
            </Section>

            <Section title='personality'>
              <div className='flex flex-col gap-1 text-pretty'>
                {personality.map(entry => (
                  <SplittedContent key={entry} content={entry} />
                ))}
              </div>
            </Section>
          </div>
          <div className={clsx('flex flex-col', GAPS)}>
            <Section title='work experience'>
              <div className='flex flex-col gap-4 relative'>
                {experience.map(exp => (
                  <ExperienceEntry key={exp.id} experience={exp} />
                ))}
              </div>
            </Section>
            <Section title='education'>
              <div className='flex flex-col gap-4 relative'>
                {education.map(exp => (
                  <ExperienceEntry
                    key={exp.id}
                    experience={exp}
                    showExpTime={false}
                  />
                ))}
              </div>
            </Section>
            <Section title='languages'>
              <div className='flex gap-2'>
                <div className='font-semibold'>English</div>
                <div>C1</div>
              </div>
              <div className='flex gap-2'>
                <div className='font-semibold'>Polish</div>
                <div>Native</div>
              </div>
            </Section>
          </div>
        </div>

        <footer className='text-sm text-text-secondary'>
          <Divider className='block mb-1' />
          <div className='flex justify-between sm:flex-row flex-col gap-2'>
            <Link
              href={linkedin}
              target='_blank'
              className='whitespace-nowrap items-center hidden md:flex'
            >
              <Icons.LinkedIn /> @{linkedin.split('/').pop()}
            </Link>
            <p className='hidden md:block'>
              {name} @ {new Date().getFullYear()}
            </p>
            <Link
              href={github}
              target='_blank'
              className='link-discrete flex items-center'
            >
              <Icons.Github /> @{github.split('/').pop()}
            </Link>
          </div>
        </footer>
      </div>
    </>
  )
}
