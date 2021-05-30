import styles from './blogstyles/PostInfo.module.css'

export default function PostInfo ({ date, category }) {
  return (
    <div className={styles.info}>
      <div className={styles.blockDate}>
        <img src='/icons/bxs-calendar.svg' alt='date icon' />
        <p>{date}</p>
      </div>
      <div className={styles.blockCat}>
        <img src='/icons/bxs-purchase-tag.svg' alt='category icon' />
        <p>{category}</p>
      </div>
    </div>
  )
}
