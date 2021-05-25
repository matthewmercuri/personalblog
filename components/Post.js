import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'
import CustomImage from './CustomImage'
import Math from './Math'
import Link from 'next/link'
import Share from './Share'
import BlockCode from './BlockCode'

import styles from './blogstyles/Post.module.css'

const components = { Image, Link, CustomImage, Math, code: BlockCode }

export default function Post ({ source, frontMatter }) {
  return (
    <div className={styles.post}>
      <Share data={frontMatter} />
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...source} components={components} />
    </div>
  )
}
