import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'
import config from '../config'

const experience = new Date('2018-10-01')
const years = new Date().getFullYear() - experience.getFullYear()

export default function Page() {
  const { title, description, flags } = config
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-extrabold tracking-tighter">{title}</h1>
        <p className="mb-8">{description}</p>
      </div>
      <p className="mb-4 text-lg">
        I'm a web developer with {years} years of experience crafting high-performance, scalable applications.
        Specializing in React, TypeScript and modern UI/UX.
        {flags.cui && (
          <>
            {' '}
            Author of{' '}
            <Link href="https://www.creation-ui.com" target="_blank" className="link">
              Creation UI
            </Link>{' '}
            design system.
          </>
        )}
      </p>
      <p> Your business idea into seamless digital experiences.</p>
      <div className="my-8">
        <h2 className="font-semibold text-xl mb-4">Latest Articles</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
