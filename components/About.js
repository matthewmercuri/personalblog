import Link from 'next/link'
import styles from '../styles/About.module.css'

export default function About () {
  return (
    <div className={styles.about}>
      <p><span>Finance, mathematics, sports, and programming.</span> I like working with them all. My name is Matthew and I appreciate you spending some time on my personal website. It is
        here that I will showcase some of my projects, research, and learning.
      </p>
      <p>What you can expect to see is stuff related to quantitative finance, data science, probability and statistics, and
        computational methods. There may even be posts about full-stack development.
      </p>
      <p>I decided to create this website as I feel it is a good motivator to continue learning and developing my skills. Of course, there is the added benefit of potentially helping
        people with similar interests to mine. With that being said, I hope that some of my posts are interesting or useful.
      </p>
      <p>I have an Honours Bachelor of Science (HBSc) in financial mathematics and I enjoy any opportunity to employ my programming and mathematics knowledge to do some fun things.</p>
      <p>If you have any suggestions or inquiries please feel free to get in touch with me through my <Link href='/contact'><a><span>contact</span></a></Link> form.</p>
      <a href='https://www.linkedin.com/in/matthew-mercuri/'><img src='/social/linkedinlogo.svg' alt='link to linkedin' /></a>
      <a href='https://github.com/matthewmercuri'><img src='/social/githublogo.svg' alt='link to github' /></a>
    </div>
  )
}
