import { MDXRemote } from 'next-mdx-remote'
import Math from './Math'
import Link from 'next/link'
import Share from './Share'
import CodeBlock from './CodeBlock'

import styles from './blogstyles/Post.module.css'

const components = { Link, Math, code: CodeBlock }

export default function Post ({ source, frontMatter }) {
  return (
    <div className={styles.post}>
      <Share data={frontMatter} />
      <h1>{frontMatter.title}</h1>
      <img src={`/featimgs/${frontMatter.featureImageName}`} alt='featured image' />
      <MDXRemote {...source} components={components} />
    </div>
  )
}
