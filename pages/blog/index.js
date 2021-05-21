import Head from 'next/head'
import { join } from 'path'
import matter from 'gray-matter'
import { readdirSync, readFileSync } from 'fs'

import BlogCard from '../../components/BlogCard'

export default function blog ({ meta }) {
  return (
    <div>
      <Head>
        <title>blog | matthew mercuri</title>
      </Head>
      <h1>Blog</h1>
      {meta.map((metadata) =>
        <BlogCard key={metadata.slug} path={metadata.slug} metadata={metadata} />)}
      {/* {paths.map((path) =>
        <h1 key={path.slug}>{path.slug}</h1>)}
      {titles.map((title) =>
        <h1 key={title}>{title}</h1>)} */}
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
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
        .replace(/[^\w-]+/g, ''))
    }
  ))

  return {
    props: {
      meta
    }
  }
}
