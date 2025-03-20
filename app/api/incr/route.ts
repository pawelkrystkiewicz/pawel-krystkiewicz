import { Redis } from '@upstash/redis'
import projectConfig from '@/config'
const redis = Redis.fromEnv()
export const config = {
  runtime: 'edge',
}

export async function POST(req: Request) {
  if (req.headers.get('Content-Type') !== 'application/json') {
    return new Response('must be json', { status: 400 })
  }

  const body = await req.json()
  let slug: string | undefined = undefined
  if ('slug' in body) {
    slug = body.slug
  }
  if (!slug) {
    return new Response('Slug not found', { status: 400 })
  }
  const ip = req.headers.get('x-forwarded-for')
  console.log('ip', ip)
  console.log('headers', req.headers)
  if (ip) {
    // Hash the IP in order to not store it directly in your db.
    const buf = await crypto.subtle.digest(
      'SHA-256',
      new TextEncoder().encode(ip),
    )
    const hash = Array.from(new Uint8Array(buf))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')

    // deduplicate the ip for each slug
    const isNew = await redis.set(['deduplicate', hash, slug].join(':'), true, {
      nx: true,
      ex: 24 * 60 * 60,
    })
    if (!isNew) {
      new Response(null, { status: 202 })
    }
  }
  await redis.incr(
    [projectConfig.projectId, 'pageviews', slug ?? 'home'].join(':'),
  )
  return new Response(null, { status: 202 })
}
