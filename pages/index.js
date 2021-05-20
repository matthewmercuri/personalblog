import Head from 'next/head'
import Welcome from '../components/Welcome'

export default function Home ({ posts }) {
  return (
    <>
      <Head>
        <title>matthew mercuri</title>
      </Head>
      <Welcome />
    </>
  )
}
