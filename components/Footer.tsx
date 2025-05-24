import config from '@/config'
import Link from 'next/link'
import Icons from './Icons'

const { name, linkedin, github, repo } = config

const items = [
  {
    href: '/rss',
    text: 'rss',
    icon: Icons.RSS,
  },
  {
    href: linkedin,
    text: 'linkedin',
    icon: Icons.LinkedIn,
  },
  {
    href: github,
    text: 'github',
    icon: Icons.Github,
  },
  {
    href: repo,
    text: 'view source',
    icon: Icons.Repository,
  },
]

export default function Footer() {
  return (
    <footer className='sm:flex sm:flex-col sm:items-center'>
      <ul className='text-sm mt-8 flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0 text-text-secondary'>
        {items.map(({ href, text, icon: Icon }) => (
          <li key={href}>
            <Link
              className='flex items-center micro-interactions link-descrete gap-1'
              rel='noopener noreferrer'
              target='_blank'
              href={href}
              title={text}
              data-umami-event={`click-${text.replace(' ', '-')}`}
              data-umami-item={href}
            >
              <Icon />
              <span className='sm:hidden block'>{text}</span>
            </Link>
          </li>
        ))}
      </ul>

      <p className='mt-8 text-neutral-600 dark:text-neutral-300 text-xs text-center'>
        {name} © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  )
}
