import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'
import customImage from './customImage'
import Link from 'next/link'

import styles from './blogstyles/Post.module.css'

const components = { Image, Link, customImage }

export default function Post ({ source, frontMatter }) {
  return (
    <div className={styles.post}>
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...source} components={components} />
    </div>
  )
}
