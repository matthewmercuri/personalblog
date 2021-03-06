import styles from '../styles/Welcome.module.css'

export default function Welcome () {
  return (
    <div className={styles.welcome}>
      <div className={styles.leftPane}>
        <h3>HI! I'M</h3>
        <div className={styles.name}>
          <h1>Matthew</h1>
          <h1>Mercuri</h1>
        </div>
        <h3>Quantitative Finance, Data Science, Mathematics</h3>
        <div className={styles.socials}>
          <a href='https://www.linkedin.com/in/matthew-mercuri/'><img src='/social/linkedinlogo.svg' alt='link to linkedin' /></a>
          <a href='https://github.com/matthewmercuri'><img src='/social/githublogo.svg' alt='link to github' /></a>
        </div>
      </div>
      <div className={styles.rightPane}>
        <img src='/hero/rocketv2.svg' alt='rocket art' />
      </div>
    </div>
  )
}
