import Head from 'next/head'
import ContactForm from '../components/ContactForm'
import TestContact from '../components/TestContact'

export default function contact () {
  return (
    <div>
      <Head>
        <title>contact | matthew mercuri</title>
      </Head>
      <h1>Contact</h1>
      <ContactForm />
      {/* <TestContact /> */}
    </div>
  )
}
