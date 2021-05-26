import Link from 'next/link'
import styles from './blogstyles/BlogCard.module.css'

export default function BlogCard ({ path, metadata }) {
  return (
    <div className={styles.blogcard}>
      <img src={`/featimgs/${metadata.featureImageName}`} alt='blog post featured image' />
      <div className={styles.info}>
        <div className={styles.blogAccent}>
          <p>{metadata.category}</p>
          <div className={styles.accent} />
        </div>
        <Link href={`/blog/post/${metadata.slug}`}><a><h1>{metadata.title}</h1></a></Link>
        <Link href={`/blog/post/${metadata.slug}`}><div className={styles.readMore}>Read</div></Link>
      </div>
    </div>
  )
}
