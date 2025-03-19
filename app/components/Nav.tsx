import config from '@/config'
import { NavigationItem, NavigationItemProps } from './NavigationItem'

const lastName = config.name.split(' ').pop()?.toLocaleLowerCase()
const { flags } = config
const navItems: Record<string, Omit<NavigationItemProps, 'path'>> = {
  '/': {
    name: 'Home',
  },
  ...(flags.articles && {
    '/articles': {
      name: 'Articles',
    },
  }),
  '/cv': {
    name: 'CV',
    downloadFilename: `cv-${lastName}`,
  },
}

export function Navbar() {
  return (
    <aside className='-ml-[8px] mb-16 tracking-tight'>
      <div className='lg:sticky lg:top-20'>
        <nav
          className='flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative'
          id='nav'
        >
          <div className='flex flex-row space-x-0 pr-10'>
            {Object.entries(navItems).map(
              ([path, { name, downloadFilename }]) => {
                return (
                  <NavigationItem
                    key={path}
                    path={path}
                    name={name}
                    downloadFilename={downloadFilename}
                  />
                )
              },
            )}
          </div>
        </nav>
      </div>
    </aside>
  )
}
