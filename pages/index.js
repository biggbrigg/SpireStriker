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
	<info1 className={styles.description}>
	Do you have what it takes to get reach the Top?<br/>
	Get ready to Strike and Topple the Towers in record time!
	</info1>
	<p className={styles.card}>
	Score Board in Development!
	</p>
      </main>
    </div>
  )
}
