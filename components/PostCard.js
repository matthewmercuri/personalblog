// import Image from 'next/image'
import style from './blogstyles/PostCard.module.css'

export default function PostCard ({ post }) {
  return (
    <div className={style.postCard}>
      {/* <Image src={`https:${post.blogFeatureImage.fields.file.url}`} alt='blog featured image' width={800} height={600} /> */}
      <div className={style.info}>
        <img src='/icons/bxs-calendar.svg' alt='calendar icon' />
        <h3>{post.blogDate}</h3>
        <img className={style.author} src='icons/bxs-user-circle.svg' alt='author icon' />
        <h3 className={style.author}>{post.blogAuthor}</h3>
        <img src='icons/bxs-purchase-tag.svg' alt='author icon' />
        {post.blogCategory.map(cat =>
          <h3 key={cat}>{cat}</h3>
        )}
      </div>
      <h1>{post.blogTitle}</h1>
    </div>
  )
}
