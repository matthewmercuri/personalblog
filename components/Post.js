import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'
import customImage from './customImage'
import Math from './Math'
import Link from 'next/link'
import Share from './Share'
import blockCode from './blockCode'

import styles from './blogstyles/Post.module.css'

const components = { Image, Link, customImage, Math, code: blockCode }

export default function Post ({ source, frontMatter }) {
  return (
    <div className={styles.post}>
      <Share data={frontMatter} />
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...source} components={components} />
    </div>
  )
}
