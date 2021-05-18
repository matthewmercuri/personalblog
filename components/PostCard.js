// import Image from 'next/image'
// import Link from 'next/link'
import style from './blogstyles/PostCard.module.css'

export default function PostCard ({ post }) {
  const articleSlug = post.fields.blogSlug
  return (
    <div className={style.postCard}>
      <a href={`/blog/post/${encodeURI(articleSlug)}`}><h1>{post.fields.blogTitle}</h1></a>
    </div>
  )
}

// export default function PostCard ({ key, post }) {
//   const articleSlug = post.fields.blogSlug
//   return (
//     <div className={style.postCard}>
//       {/* <Image src={`https:${post.blogFeatureImage.fields.file.url}`} alt='blog featured image' width={800} height={600} /> */}
//       <div className={style.info}>
//         <img src='/icons/bxs-calendar.svg' alt='calendar icon' />
//         <h3>{post.fields.blogDate}</h3>
//         <img className={style.author} src='icons/bxs-user-circle.svg' alt='author icon' />
//         <h3 className={style.author}>{post.fields.blogAuthor}</h3>
//         <img src='icons/bxs-purchase-tag.svg' alt='author icon' />
//         {post.fields.blogCategory.map(cat =>
//           <h3 key={cat}>{cat}</h3>
//         )}
//       </div>
//       {/* <h1><Link href={`/blog/post/${encodeURI(articleSlug)}`}><a>{post.fields.blogTitle}</a></Link></h1> */}
//       <h1><a href={`/blog/post/${encodeURI(articleSlug)}`}>{post.fields.blogTitle}</a></h1>
//     </div>
//   )
// }
