import PostCard from './PostCard'
import style from './blogstyles/BlogPosts.module.css'

export default function BlogPosts ({ posts }) {
  return (
    <div className={style.blogPosts}>
      {/* <p>{JSON.stringify(posts)}</p> */}
      {posts.map((post) =>
        <PostCard key={post.blogId} post={post} />
      )}
    </div>
  )
}
