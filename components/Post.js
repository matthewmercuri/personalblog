import style from './blogstyles/Post.module.css'
const marked = require('marked')

export default function Post ({ post }) {
  return (
    <div className={style.post}>
      <h1>{post.fields.blogTitle}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: marked(post.fields.blogBody)
        }}
      />
    </div>
  )
}
