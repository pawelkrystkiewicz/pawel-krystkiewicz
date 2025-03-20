import { getArticles } from '@/app/articles/utils'
import { getBaseUrl } from './utils/get-base-url'

export const ROUTES = ['', 'cv', 'articles']
export const ARTICLES = getArticles().map(post => ({
  slug: post.slug,
  lastModified: post.metadata.publishedAt,
}))

export const baseUrl = getBaseUrl()

export default async function sitemap() {
  let articles = ARTICLES.map(({ slug, lastModified }) => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified,
  }))

  let routes = ROUTES.map(route => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...articles]
}
