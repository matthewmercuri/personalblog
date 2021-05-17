import { client  } from "../../../contentful/setup"
import Post from '../../../components/Post.js'

export default function Posts({ post }) {
    return (
        <div>
          {/* <p>{JSON.stringify(post)}</p> */}
          <Post post={post} />
        </div>
    )
}

export async function getStaticProps ({ params }) {
  const article = await client.getEntries({content_type: 'blogPost', 'fields.blogSlug': params.slug})

  if (!article) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post: article.items[0]
    }
  }
}

export async function getStaticPaths() {
  const allPosts = await client.getEntries({
    content_type: "blogPost"
  })

  return {
    paths: allPosts.items.map((item) => ({
      params: { slug: item.fields.blogSlug },
    })),
    fallback: false
  }
}
