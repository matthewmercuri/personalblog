import Head from 'next/head'
import Welcome from '../components/Welcome'
import Recent from '../components/Recent'
import { client } from '../contentful/setup'

export default function Home ({ posts }) {
  return (
    <>
      <Head>
        <title>matthew mercuri</title>
      </Head>
      <Welcome />
      <Recent posts={posts} />
    </>
  )
}

export async function getStaticProps ({ params }) {
  const query = { limit: 5, content_type: 'blogPost' }
  const recentPosts = await client.getEntries(query)

  if (!recentPosts) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      posts: recentPosts.items
    }
  }
}

// export async function getStaticProps ({ params }) {
//   const allPosts = await fetchEntries()

//   if (!allPosts) {
//     return {
//       notFound: true
//     }
//   }

//   return {
//     props: {
//       posts: allPosts
//     }
//   }
// }
