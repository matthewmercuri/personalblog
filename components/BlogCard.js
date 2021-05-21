import styles from './blogstyles/BlogCard.module.css'

export default function BlogCard ({ path, metadata }) {
  return (
    <div className={styles.blogcard}>
      <h2>{metadata.title}</h2>
    </div>
  )
}
