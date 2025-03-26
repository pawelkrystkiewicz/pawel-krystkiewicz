import { formatDate, getArticles } from '@/app/articles/utils'
import { CustomMDX } from '@/components/Mdx'
import { ReportView } from '@/components/ReportView'
import config from '@/config'
import { baseUrl } from 'app/sitemap'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  let posts = getArticles()

  return posts.map(post => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params

  let post = getArticles().find(post => post.slug === slug)
  if (!post) {
    return {
      title: 'Articles',
      description: 'Articles',
    }
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/articles/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Article({ params }) {
  if (!config.flags.articles) {
    notFound()
  }

  try {
    const { slug } = await params
    let post = getArticles().find(post => post.slug === slug)

    if (!post) {
      notFound()
    }

    return (
      <section>
        <script
          type='application/ld+json'
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${baseUrl}${post.metadata.image}`
                : `/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `${baseUrl}/articles/${post.slug}`,
              author: {
                '@type': 'Person',
                name: 'My Portfolio',
              },
            }),
          }}
        />
        <h1 className='title font-semibold text-4xl tracking-tighter mb-2'>
          {post.metadata.title}
        </h1>
        <p className='text-base text-text-secondary text-pretty'>
          {post.metadata.summary}
        </p>
        <div className='flex justify-between items-center mt-2 mb-8 text-sm'>
          <p className='text-sm text-text-primary'>
            {formatDate(post.metadata.publishedAt)}
          </p>
        </div>
        <article className='prose sm:prose-sm'>
          <CustomMDX source={post.content} />
        </article>
        <ReportView slug={post.slug} />
      </section>
    )
  } catch (error) {
    console.error('Error rendering article:', error)
    notFound()
  }
}
