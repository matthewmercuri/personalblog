import Head from 'next/head'
import { join } from 'path'
import matter from 'gray-matter'
import { readdirSync, readFileSync } from 'fs'

import BlogCard from '../../components/BlogCard'

export default function blog ({ sortedMeta }) {
  return (
    <div>
      <Head>
        <title>blog | matthew mercuri</title>
      </Head>
      <h1>Blog</h1>
      {sortedMeta.map((metadata) =>
        <BlogCard key={metadata.slug} path={metadata.slug} metadata={metadata} />)}
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

  const sortedMeta = meta.sort((a, b) => new Date(b.date) - new Date(a.date))

  return {
    props: {
      sortedMeta
    }
  }
}
