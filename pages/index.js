import Head from 'next/head'
import Welcome from '../components/Welcome'
import Recent from '../components/Recent'

export default function Home () {
  return (
    <>
      <Head>
        <title>matthew mercuri</title>
      </Head>
      <Welcome />
      <Recent />
      {/* <Latest /> */}
      {/* <RecentPosts /> */}
    </>
  )
}
