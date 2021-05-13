import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Nav.module.css'

export default function Nav () {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <nav className={styles.mainNav}>
      <div className={styles.regNav}>
        <img className={styles.logo} src='/baselogo.svg' alt='logo' />
        <ul>
          <li><Link href='/'><a>home</a></Link></li>
          <li><Link href='/blog'><a>blog</a></Link></li>
          <li><Link href='/about'><a>about</a></Link></li>
          <li><Link href='/contact'><a>contact</a></Link></li>
        </ul>
      </div>
      <div className={click ? `${styles.mobileNavOpen} ${styles.mobileNav}` : styles.mobileNav}>
        <div className={styles.topMobileNav}>
          <img className={styles.mobileLogo} src='/baselogoinv.svg' />
          <img className={click ? styles.menuOpen : styles.menu} onClick={handleClick} src='/menu.svg' alt='burger-menu' />
          <img className={click ? styles.close : styles.hideClose} onClick={closeMobileMenu} src='/x.svg' alt='burger-menu-close' />
        </div>
        <ul className={click ? styles.linksOpen : styles.linksClosed}>
          <li><Link href='/'><a onClick={closeMobileMenu}>home</a></Link></li>
          <li><Link href='/blog'><a onClick={closeMobileMenu}>blog</a></Link></li>
          <li><Link href='/about'><a onClick={closeMobileMenu}>about</a></Link></li>
          <li><Link href='/contact'><a onClick={closeMobileMenu}>contact</a></Link></li>
        </ul>
      </div>
    </nav>
  )
}
