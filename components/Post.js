import { MDXRemote } from 'next-mdx-remote'

export default function Post ({ source, frontMatter }) {
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...source} />
    </div>
  )
}
