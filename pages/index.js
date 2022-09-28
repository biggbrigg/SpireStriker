import Head from 'next/head'
import Image from 'next/image'
import background from '../public/SpireStrikerBlank.png'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>    
      <main className={styles.main}>
	<h1 className={styles.title}>
        Welcome to Spire Striker!
	</h1>
      </main>
    </div>
  )
}
