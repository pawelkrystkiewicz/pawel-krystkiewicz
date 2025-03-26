import Link from 'next/link'
import { formatDate, getArticles } from '@/app/articles/utils'

export function PostedArticles() {
  let allArticles = getArticles()

  return (
    <div>
      {allArticles
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map(post => (
          <Link
            key={post.slug}
            className='flex flex-col space-y-1 mb-4'
            href={`/articles/${post.slug}`}
          >
            <div className='w-full sm:grid sm:grid-cols-[auto_1fr] gap-1 sm:gap-4 flex flex-col mb-2 sm:mb-0'>
              <p className='tabular-nums sm:text-base text-sm'>
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <div className='flex flex-col gap-2'>
                <p className='tracking-tight font-medium'>
                  {post.metadata.title}
                </p>
                <p className='text-sm text-gray-500'>{post.metadata.summary}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
