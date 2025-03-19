import achievements from '@/app/components/cv/achievements.data'
import experience from '@/app/components/cv/experience.data'
import education from '@/app/components/cv/education.data'
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
        className="print:p-5 grid grid-cols-3 gap-y-6 gap-x-8 text-sm border border-border/10 rounded-[1px] relative"
        id="printable">
        <div
          className="absolute top-0 left-0 border border-error print:hidden"
          style={{
            height: '297mm',
            width: '210mm',
            visibility: DEBUG ? 'visible' : 'hidden',
          }}
        />
        <header className="border-b-2 border-border pb-4 mb-4 grid grid-cols-3 col-span-3">
          <div className="text-4xl  font-extrabold">{name}</div>
          <div className="text-xl self-end">
            Frontend
            <br /> Developer
          </div>
          <div className="mt-2 text-gray-700 flex flex-col justify-between">
            <Link href={`tel:${phone}`} target="_blank" className="whitespace-nowrap flex items-center gap-1">
              <Icons.Phone /> {phone}
            </Link>
            <Link href={`mailto:${email}`} target="_blank" className="whitespace-nowrap flex items-center gap-1">
              <Icons.Email /> {email}
            </Link>
            <Link href={linkedin} target="_blank" className="whitespace-nowrap flex items-center gap-1">
              <Icons.LinkedIn /> LinkedIn
            </Link>
          </div>
        </header>

        <Section title="about" className="col-start-1">
          <div className="flex flex-col gap-2">
            <Paragraph>
              I'm a web developer with {config.totalExperience} years of experience crafting well designed and impactful
              applications.
            </Paragraph>
            <Paragraph>
              Specializing in React, TypeScript with a good eye for modern UI/UX.
              {config.flags.cui && (
                <>
                  {' '}
                  Author of{' '}
                  <Link href={'https://www.creation-ui.com'} target="_blank" className="link-discrete">
                    Creation UI
                  </Link>{' '}
                  design system.
                </>
              )}
            </Paragraph>
            <Paragraph>
              My projects are high-performance, scalable applications that contribute to products that drive real
              business impact.
            </Paragraph>
            <Paragraph>Strong believer in empathy-driven design and accessibility.</Paragraph>
          </div>
        </Section>
        <Section title="work experience" className="col-span-2 col-start-2">
          <div className="flex flex-col gap-4 relative">
            {experience.map(exp => (
              <ExperienceEntry key={exp.id} experience={exp} />
            ))}
          </div>
        </Section>

        <Section title="skills" className="col-start-1 row-start-3 row-span-3">
          <div className="flex flex-col gap-2 text-pretty">
            <Paragraph>Excellent knowledge of JavaScript and TypeScript (ES6+, OOP, FP)</Paragraph>
            <Paragraph>
              Very good understanding of HTML and CSS (RWD, Mobile First, BEM, SASS, JSS, Styled Components,
              TailwindCSS)
            </Paragraph>
            <Paragraph>Proficiency in React and integrating frontend with REST and GraphQL APIs</Paragraph>
            <Paragraph>Experience with TDD and Agile/Scrum methodology</Paragraph>
          </div>
        </Section>
        <Section title="key achievements" className="col-span-2 text-pretty col-start-2 row-start-2">
          <div className="flex flex-col gap-2">
            <AchievementEntry achievement={achievements[0]} />
          </div>
        </Section>
        <Section title="education" className=" col-start-2 col-span-2">
          <div className="flex flex-col gap-4 relative">
            {education.map(exp => (
              <ExperienceEntry key={exp.id} experience={exp} showExpTime={false} />
            ))}
          </div>
        </Section>
        <Section title="languages" className="col-start-2 col-span-2 row-start-5">
          <div className="flex gap-2">
            <div className="font-semibold">English</div>
            <div>C1</div>
          </div>
          <div className="flex gap-2">
            <div className="font-semibold">Polish</div>
            <div>Native</div>
          </div>
        </Section>
        <footer className="text-sm text-text-secondary col-span-3">
          <Divider className="block mb-1" />
          <div className="flex justify-between">
            <Link href={linkedin} target="_blank" className="whitespace-nowrap flex items-center">
              <Icons.LinkedIn /> @{linkedin.split('/').pop()}
            </Link>
            <p>
              {name} @ {new Date().getFullYear()}
            </p>
            <Link href={github} target="_blank" className="link-discrete flex items-center">
              <Icons.Github /> @{github.split('/').pop()}
            </Link>
          </div>
        </footer>
      </div>
    </>
  )
}
