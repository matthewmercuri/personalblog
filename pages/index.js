import Head from 'next/head'
import Welcome from '../components/Welcome'

export default function Home ({ posts }) {
  return (
    <>
      <Head>
        <title>matthew mercuri</title>
        <meta property='og:site_name' content='Matthew Mercuri' />
        <meta property='og:title' content='Matthew Mercuri - Quantitative Finance, Data Science, and Math' />
        <meta property='og:description' content='My work involving finance, data science, mathematics, and anything else I find interesting' />
        <meta name='description' content='My work involving finance, data science, mathematics, and anything else I find interesting' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/ogimage.png' />
        <meta property='og:url' content='https://www.matthewmercuri.com' />
      </Head>
      <Welcome />
    </>
  )
}
