import Head from 'next/head'
import { fetchEntries } from '../../contentful/setup'
import BlogPosts from '../../components/BlogPosts'

export default function blog ({ posts }) {
  return (
    <div>
      <Head>
        <title>blog | matthew mercuri</title>
      </Head>
      <h1>Blog</h1>
      <BlogPosts posts={posts} />
    </div>
  )
}

export async function getStaticProps ({ params }) {
  const allPosts = await fetchEntries()

  if (!allPosts) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      posts: allPosts
    }
  }
}
