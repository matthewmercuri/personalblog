import styles from '../styles/Welcome.module.css'

export default function Welcome () {
  return (
    <div className={styles.welcome}>
      <h1>Welcome!</h1>
      <h3>I'm Matthew, and I like working with numbers</h3>
      <h5>Here you will find my work involving finance, data science, mathematics, and anything else I find interesting</h5>
      <div className={styles.socials}>
        <a href='https://www.linkedin.com/in/matthew-mercuri/'><img src='/social/linkedinlogo.svg' alt='link to linkedin' /></a>
        <a href='https://github.com/matthewmercuri'><img src='/social/githublogo.svg' alt='link to github' /></a>
      </div>
    </div>
  )
}
