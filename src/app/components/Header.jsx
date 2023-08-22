import React from 'react'
import styles from '@/app/styles/navbar.module.css'
import Link from 'next/link';
import Navbar from './Navbar';
const Header = () => {
  return (
    <>
    <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
            <Link href='/' > 
                MovieVerse
            </Link>
        </div>
        <Navbar />
    </header>
    </>
  )
}

export default Header
