import Head from 'next/head'
import { join } from 'path'
import matter from 'gray-matter'
import { readdirSync, readFileSync } from 'fs'

import Welcome from '../components/Welcome'
import BlogCard from '../components/BlogCard'

import styles from '../styles/index.module.css'

export default function Home ({ sortedMeta }) {
  return (
    <>
      <Head>
        <title>matthew mercuri</title>
        <meta property='og:site_name' content='Matthew Mercuri' />
        <meta property='og:title' content='Matthew Mercuri - Quantitative Finance, Data Science, and Math' />
        <meta property='og:description' content='My work involving finance, data science, mathematics, and anything else I find interesting' />
        <meta name='description' content='My work involving finance, data science, mathematics, and anything else I find interesting' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='https://www.matthewmercuri.com/ogimage.png' />
        <meta property='og:url' content='https://www.matthewmercuri.com' />
      </Head>
      <div>
        <Welcome />
        <h1 className={styles.recentHead}>Recent Posts</h1>
        {sortedMeta.map((metadata) =>
          <BlogCard key={metadata.slug} path={metadata.slug} metadata={metadata} />)}
      </div>
    </>
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

  const sortedMeta = meta.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3)

  return {
    props: {
      sortedMeta
    }
  }
}
