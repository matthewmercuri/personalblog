import { MDXRemote } from 'next-mdx-remote'
import Math from './Math'
import Link from 'next/link'
import Share from './Share'
import CodeBlock from './CodeBlock'

import styles from './blogstyles/Post.module.css'
import PostInfo from './PostInfo'

const components = { Link, Math, code: CodeBlock }

export default function Post ({ source, frontMatter }) {
  return (
    <div className={styles.post}>
      <Share data={frontMatter} />
      <h1>{frontMatter.title}</h1>
      <PostInfo date={frontMatter.date} category={frontMatter.category} />
      {/* featured image should be 800*600 */}
      <img src={`/featimgs/${frontMatter.featureImageName}`} className={styles.featureImage} alt='featured image' />
      <div className={styles.postContent}>
        <MDXRemote {...source} components={components} />
      </div>
    </div>
  )
}
