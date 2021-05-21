import Head from 'next/head'
import { join } from 'path'
import matter from 'gray-matter'
import { readdirSync, readFileSync } from 'fs'
import Post from '../../../components/Post'
import { serialize } from 'next-mdx-remote/serialize'

export default function PostPage ({ source, frontMatter}) {
  return (
    <>
      <Head>
        <title>{frontMatter.title} | matthew mercuri</title>
      </Head>
      <div>
        <Post source={source} frontMatter={frontMatter} />
      </div>
    </>
  )
}

export async function getStaticProps ({ params }) {
  const path = join(process.cwd(), 'posts')
  const files = readdirSync(path).map((f) =>
    join(path, f))
  const sources = files.map(file =>
    matter(readFileSync(file)))

  const meta = sources.map((source) => (
    {
      title: source.data.title,
      description: source.data.description,
      author: source.data.author,
      date: source.data.date,
      category: source.data.category,
      featureImageName: source.data.featureImageName,
      slug: (source.data.title.toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')),
      content: source.content,
      data: source.data
    }
  ))

  const entry = meta.find((entry) => entry.slug === params.slug)
  const {content, data} = matter(entry)
  const mdxSource = await serialize(content, {scope: data})

  return {
    props: { source: mdxSource, frontMatter: data }
  }
}

export const getStaticPaths = async () => {
  const path = join(process.cwd(), 'posts')
  const files = readdirSync(path).map((f) =>
    join(path, f))
  const sources = files.map(file =>
    matter(readFileSync(file)))

  const paths = sources.map((source) => (
    {
      params: {
        slug: (source.data.title.toLowerCase()
          .replace(/ /g, '-')
          .replace(/[^\w-]+/g, ''))
      }
    }
  ))

  return {
    paths,
    fallback: false
  }
}
