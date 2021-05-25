import Link from 'next/link'
import styles from './blogstyles/BlogCard.module.css'

export default function BlogCard ({ path, metadata }) {
  return (
    <div className={styles.blogcard}>
      <Link href={`/blog/post/${metadata.slug}`}><a><h2>{metadata.title}</h2></a></Link>
    </div>
  )
}
