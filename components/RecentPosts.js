import BlogCard from './BlogCard'

import styles from '../styles/Recent.module.css'

export default function RecentPosts ({ sortedMeta }) {
  return (
    <div className={styles.recent}>
      <h1>Recent Posts</h1>
      {sortedMeta.map((metadata) =>
        <BlogCard key={metadata.slug} path={metadata.slug} metadata={metadata} />)}
    </div>
  )
}
