import RecentPostCard from './RecentPostCard'
import styles from '../styles/Recent.module.css'

export default function Recent ({ posts }) {
  return (
    <div className={styles.recent}>
      <h1>Recent Posts</h1>
      {posts.map((post) =>
        <RecentPostCard key={post.fields.blogId} post={post} />
      )}
    </div>
  )
}
