import { useState, useEffect } from 'react';
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import { Orbitron } from 'next/font/google'
import { LuSunMedium, LuMoon } from 'react-icons/lu';
import { debounce } from '../utilities/helpers';

const orbitron = Orbitron({ subsets: ['latin'] })

function Navbar({handleClick, darkMode}) {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.scrollY;

    setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 100, true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  return (
    <header className={darkMode? styles.headerDark : styles.header} style={{top: visible ? '0' : '-120px'}}>
      <nav className='flex justify-between items-center w-full px-14 py-[1.5rem]'>
        <Link href={"#"} className={orbitron.className}>
          <h1 className={darkMode? styles.logo : styles.logoLight}>Topman</h1>
        </Link>
        <ul className={styles.navItemWrapper}>
          <Link href={"#about"}><li className={styles.navUlItems}>About</li></Link>
          <Link href={"#projects"}><li className={styles.navUlItems}>Projects</li></Link>
          <Link href={"#contact"}><li className={styles.navUlItems}>Contact</li></Link>
          <li className='flex items-center text-2xl mr-10 cursor-pointer' onClick={handleClick}> {darkMode ?  <LuSunMedium /> : <LuMoon /> }</li>
        </ul>
      </nav>
    </header>   
  )
}

export default Navbar               