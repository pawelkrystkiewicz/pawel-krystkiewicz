import { BlogPosts } from '@/app/components/Posts'

export const metadata = {
  title: 'Articles',
  description: 'Best tech articles I have written.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Articles</h1>
      <BlogPosts />
    </section>
  )
}
