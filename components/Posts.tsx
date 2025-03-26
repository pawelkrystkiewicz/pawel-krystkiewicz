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
            <div className='w-full grid grid-cols-[auto_1fr] gap-4'>
              <p className='tabular-nums'>
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
