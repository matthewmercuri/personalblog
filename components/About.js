import Link from 'next/link'
import styles from '../styles/About.module.css'

export default function About () {
  return (
    <div className={styles.about}>
      <img className={styles.quot1} src='/accents/quotation.svg' alt='accent' />
      <p><span>Finance, mathematics, sports, and programming.</span> I like working with them all. My name is Matthew and I appreciate you spending some time on my personal website. It is
        here that I will showcase some of my projects, research, and learning.
      </p>
      <p>What you can expect to see here is stuff related to quantitative finance, data science, probability and statistics, and
        computational methods. There may even be posts about full-stack web development.
      </p>
      <p>I decided to create this website as I feel it is a good motivator to continue learning and developing my skills. Of course, there is the added benefit of potentially helping
        people with similar interests to mine. I continually try to differentiate myself amongst a crowd of extremely bright people. I think my value comes from my efforts in understanding mathematics and finance, and then
        being able to action ideas through code. With that being said, I hope that some of my posts are interesting or useful.
      </p>
      <p>I have an Honours Bachelor of Science (BSc) in financial mathematics and I enjoy any opportunity to employ my programming and mathematics knowledge to do some fun things.</p>
      <p>If you have any suggestions or inquiries, please feel free to get in touch with me through my <Link href='/contact'><a><span>contact</span></a></Link> form.</p>
      <img className={styles.quot2} src='/accents/quotation.svg' alt='accent' />
      <div className={styles.sig}>
        <h3>Matthew Mercuri</h3>
        <div><a href='https://www.linkedin.com/in/matthew-mercuri/'><img className={styles.aboutSocial} src='/social/linkedinlogo.svg' alt='link to linkedin' /></a>
          <a href='https://github.com/matthewmercuri'><img className={styles.aboutSocial} src='/social/githublogo.svg' alt='link to github' /></a>
        </div>
      </div>
      <p className={styles.disclaimer}>Please note that anything I share here should not be considered financial advice. Should you require advice, speak to
        an accredited financial professional.
      </p>
    </div>
  )
}
