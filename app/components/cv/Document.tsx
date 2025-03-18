'use client'

import achievements from '@/app/components/cv/data/achievements.json'
import experience from '@/app/components/cv/data/work-experience.json'
import { WorkPeriod } from '@/app/types'
import { calculateTimeDiff } from '@/app/utils/calculate-time-diff'
import config from '@/config'
import clsx from 'clsx'
import Link from 'next/link'
import { FC, ReactNode } from 'react'
import { Paragraph, PageBreak, Divider } from './Typography'
const { name, email, linkedin, github, repo, phone } = config

interface WorkDateProps {
  period: WorkPeriod
  className?: string
}

const WorkDate = (props: WorkDateProps) => {
  const { period, className } = props
  return (
    <span className={clsx('text-text-secondary', className)}>
      {new Date(period.year, period.month - 1).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
      })}
    </span>
  )
}

interface SectionProps {
  title?: string
  children?: ReactNode
  className?: string
}
const Section: FC<SectionProps> = ({ title, children, className }) => {
  return (
    <section className={clsx('flex flex-col gap-2', className)}>
      <h2 className="text-3xl font-bold text-text-secondary">{title}</h2>
      <Divider />
      <div className="">{children}</div>
    </section>
  )
}

const DEBUG = false

export const Document = () => {
  return (
    <>
      <div className="print:px-5 grid grid-cols-3 gap-y-6 gap-x-8 text-sm border border-border/10 rounded-[1px] relative" id="printable">
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
            <Link href={`tel:${phone}`} target="_blank" className="whitespace-nowrap">
              {phone}
            </Link>
            <Link href={`mailto:${email}`} target="_blank" className="whitespace-nowrap">
              {email}
            </Link>
            <Link href={linkedin} target="_blank" className="whitespace-nowrap">
              LinkedIn
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
              Specializing in React, TypeScript with a good eye for modern UI/UX. Author of{' '}
              <Link href={'https://www.creation-ui.com'} target="_blank" className="link-discrete">
                Creation UI
              </Link>{' '}
              design system.
            </Paragraph>
            <Paragraph>
              My projects are high-performance, scalable applications that contribute to products that drive real
              business impact.
            </Paragraph>
          </div>
        </Section>
        <Section title="work experience" className="col-span-2 col-start-2">
          <div className="flex flex-col gap-4 relative">
            {experience.map(exp => (
              <div className="relative group cursor-default" key={exp.id}>
                <div className="flex justify-between gap-2">
                  <div className="col-span-2 flex flex-col">
                    <p className="text-base font-semibold ">{exp.role}</p>
                    <p className="text-text-secondary">
                      <WorkDate period={exp.start} /> - {exp.end ? <WorkDate period={exp.end} /> : 'Present'}
                    </p>
                  </div>
                  <div className="flex flex-col text-right">
                    <div className="flex gap-1 items-center">
                      <span className="text-text-secondary">{calculateTimeDiff(exp.start, exp.end)} @</span>
                      {exp.link ? (
                        <Link
                          href={exp.link}
                          target="_blank"
                          className="link-descrete micro-interactions text-base font-medium "
                          title="Company website">
                          {exp.company}
                        </Link>
                      ) : (
                        <span className="text-base font-medium">{exp.company}</span>
                      )}
                    </div>
                    <div className="flex gap-1 items-center text-right">
                      <p className="text-text-secondary">{exp.industry} | </p>
                      <p className="text-text-secondary">{exp.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="personality" className="col-start-1 row-start-4">
          <div className="flex flex-col gap-2 text-pretty">
            <p>
              Easy going with a strong work ethic. Creative and quick learner. Problem solver and solution-oriented team
              player.
            </p>
            <p>Amongst teammates often nicknamed "the executor" - every task gets done.</p>
          </div>
        </Section>

        <Section title="skills" className="col-start-1 row-start-3">
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
            {achievements.map(achievement => (
              <div key={achievement.company} className="flex flex-col gap-1">
                <h4 className="font-bold">
                  {achievement.project && <span className="text-text-secondary">{achievement.project} @</span>}
                  {achievement.company}
                </h4>
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
            ))}
          </div>
        </Section>
        <Section title="education" className=" col-start-2 col-span-1  row-start-4">
          <p className="font-bold text-base">Poznan University of Technology (PUT)</p>
          <p className="text-text-secondary">2013–2018 M.Sc. Eng in Mechatronics</p>
        </Section>
        <Section title="languages" className="col-start-3 col-span-1 row-start-4">
          <tbody>
            <tr>
              <td className="pr-4">English</td>
              <td>C1</td>
            </tr>
            <tr>
              <td className="pr-4">Polish</td>
              <td>Native</td>
            </tr>
          </tbody>
        </Section>
        <footer className="text-sm text-text-secondary col-span-3">
          <Divider className="bg-text-primary" />
          <p>
            {name} @ {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </>
  )
}
