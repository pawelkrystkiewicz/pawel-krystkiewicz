import achievements from '@/components/cv/achievements.data'
import experience from '@/components/cv/experience.data'
import education from '@/components/cv/education.data'
import config from '@/config'
import Link from 'next/link'
import { AchievementEntry } from './AchievementEntry'
import { ExperienceEntry } from './ExperienceEntry'
import { Section } from './Section'
import { Divider, Paragraph } from './Typography'
import Icons from '../Icons'
const { name, email, linkedin, github, phone } = config

const DEBUG = false

export const Document = () => {
  return (
    <>
      <div
        className='print:p-5 grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-8 text-sm rounded-[1px]'
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
        <header className='border-b-2 border-border pb-4 mb-4 grid grid-cols-1 md:grid-cols-3 col-span-1 md:col-span-3'>
          <div className='text-4xl  font-extrabold'>{name}</div>
          <div className='text-xl self-end'>
            Frontend
            <br /> Developer
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

        <Section title='about' className='col-start-1'>
          <div className='flex flex-col gap-2'>
            <Paragraph>
              I'm a web developer with {config.totalExperience} years of
              experience crafting well designed and impactful applications.
            </Paragraph>
            <Paragraph>
              Specializing in React, TypeScript with a good eye for modern
              UI/UX.
              {config.flags.cui && (
                <>
                  {' '}
                  Author of{' '}
                  <Link
                    href={'https://www.creation-ui.com'}
                    target='_blank'
                    className='link-discrete'
                  >
                    Creation UI
                  </Link>{' '}
                  design system.
                </>
              )}
            </Paragraph>
            <Paragraph>
              My projects are high-performance, scalable applications that
              contribute to products that drive real business impact.
            </Paragraph>
            <Paragraph>
              Strong believer in empathy-driven design and accessibility.
            </Paragraph>
          </div>
        </Section>
        <Section
          title='key achievements'
          className='col-span-1 md:col-span-2 text-pretty md:col-start-2 md:row-start-2'
        >
          <div className='flex flex-col gap-2'>
            <AchievementEntry achievement={achievements[0]} />
          </div>
        </Section>
        <Section
          title='work experience'
          className='col-span-1 md:col-span-2 md:col-start-2'
        >
          <div className='flex flex-col gap-4 relative'>
            {experience.map(exp => (
              <ExperienceEntry key={exp.id} experience={exp} />
            ))}
          </div>
        </Section>

        <Section
          title='skills'
          className='col-start-1 md:row-start-3 md:row-span-3'
        >
          <div className='flex flex-col gap-2 text-pretty'>
            <Paragraph>
              Experienced in JavaScript (ES6+), TypeScript, and React, with deep
              knowledge of state management (Redux, Zustand), testing (Jest,
              Cypress, Playwright), and modern build tools (Webpack, Vite).
            </Paragraph>
            <Paragraph>
              Strong understanding of frontend architecture, design patterns,
              and CI/CD, with a focus on writing clean, maintainable code
              following SOLID principles. End-to-end testing ownership.
            </Paragraph>
            <Paragraph>
              Proven ability to collaborate effectively with designers and
              backend teams in Agile environments.
            </Paragraph>
            <Paragraph>
              Passionate about design systems, and modern frontend technologies
              with experience around cloud services (Vercel, Google Cloud, AWS,
              Coolify, Railway).
            </Paragraph>
          </div>
        </Section>

        <Section
          title='education'
          className='col-span-1 md:col-start-2 md:col-span-2'
        >
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
        <Section
          title='languages'
          className='col-span-1 md:col-start-2 md:col-span-2 md:row-start-5'
        >
          <div className='flex gap-2'>
            <div className='font-semibold'>English</div>
            <div>C1</div>
          </div>
          <div className='flex gap-2'>
            <div className='font-semibold'>Polish</div>
            <div>Native</div>
          </div>
        </Section>
        <footer className='text-sm text-text-secondary col-span-1 md:col-span-3'>
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
