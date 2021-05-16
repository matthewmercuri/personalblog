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

// export async function getStaticPaths () {
//   // Call an external API endpoint to get posts
//   const posts = await client.getEntries()
//   console.log(posts.items)

// Get the paths we want to pre-render based on posts
// const paths = posts.map((post) => ({
//   params: { id: post.id }
// }))

// We'll pre-render only these paths at build time.
// { fallback: false } means other routes should 404.
// return { paths, fallback: false }
// }

export async function getStaticProps () {
  const res = await fetchEntries()
  const posts = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts
    }
  }
}
