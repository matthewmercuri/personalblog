import Head from 'next/head'
import About from '../components/About'

export default function about () {
  return (
    <div>
      <Head>
        <title>about | matthew mercuri</title>
      </Head>
      <h1>About</h1>
      <About />
    </div>
  )
}
