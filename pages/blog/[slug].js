export default function Posts({ posts }) {
    const posts = posts.posts
    return (
        <div>
            <ul>
            {posts.map((post) => (
                <li>{post.title}</li>
            ))}
             </ul>
        </div>
    )
}

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

export async function getStaticPaths() {
// Call an external API endpoint to get posts
const res = await fetch('https://.../posts')
const posts = await res.json()

// Get the paths we want to pre-render based on posts
const paths = posts.map((post) => ({
    params: { id: post.id },
}))

// We'll pre-render only these paths at build time.
// { fallback: false } means other routes should 404.
return { paths, fallback: false }
}
