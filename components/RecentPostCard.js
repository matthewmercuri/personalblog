import style from './blogstyles/RecentPostCard.module.css'

export default function RecentPostCard ({ post }) {
  const articleSlug = post.fields.blogSlug
  return (
    <div className={style.recentPostCard}>
      <a href={`/blog/post/${encodeURI(articleSlug)}`}><h1>{post.fields.blogTitle}</h1></a>
    </div>
  )
}
