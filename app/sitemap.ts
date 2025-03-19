import { getArticles } from '@/app/articles/utils'

export const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL

export default async function sitemap() {
  let articles = getArticles().map(post => ({
    url: `${baseUrl}/articles/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', 'cv', '/articles'].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...articles]
}
