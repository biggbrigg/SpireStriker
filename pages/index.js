import Head from 'next/head'
import Image from 'next/image'
import background from '../public/SpireStrikerBlank.png'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const clickHandle = () => {
document.location.href = 'https://www.oculus.com/deeplink/?action=view&path=app/5425407757552127&ref=oculus_desktop';  
}
export default function Home() {
  return (
    <div className={styles.container}>    
      <main className={styles.main}>
	<h1 className={styles.title}>
        Spire Striker
	</h1>
	<info1 className={styles.description}>
	Do you have what it takes to get reach the Top?<br/>
	Get ready to Strike and Topple the Towers in record time!
	</info1>
	<p className={styles.description}>
	Free to Play on Oculus!<br/>
	<button onClick={clickHandle}>Oculus Store</button>
	</p>
	<li>
        <Link href="/privacy">Privacy Policy</Link>
      </li>
      </main>
    </div>
  )
}
