import Head from 'next/head'
import style from './blogstyles/Post.module.css'
import Share from './Share'
const marked = require('marked')

export default function Post ({ post }) {
  return (
    <>
      <Head>
        <title>{post.fields.blogTitle}</title>
      </Head>
      <div className={style.post}>
        <Share post={post} />
        <h1>{post.fields.blogTitle}</h1>
        <div className={style.info}>
          <img className={style.hide} src='/icons/bxs-calendar.svg' alt='calendar icon' />
          <h3 className={style.hide}>{post.fields.blogDate}</h3>
          <img className={style.hide} src='/icons/bxs-user-circle.svg' alt='author icon' />
          <h3 className={style.hide}>{post.fields.blogAuthor}</h3>
          <img src='/icons/bxs-purchase-tag.svg' alt='category icon' />
          {post.fields.blogCategory.map(cat =>
            <h3 className={style.cat} key={cat}>{cat}</h3>
          )}
        </div>
        <div className={style.featureImage}><img src={`https:${post.fields.blogFeatureImage.fields.file.url}`} alt='blog featured image' /></div>
        <div
          className={style.bbody}
          dangerouslySetInnerHTML={{
            __html: marked(post.fields.blogBody)
          }}
        />
        {/* <Share post={post} /> */}
      </div>
    </>
  )
}
