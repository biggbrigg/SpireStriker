import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Privacy(props) {
  return (
	<div className={styles.container}>
		<main className={styles.main}>
			<info1 className={styles.description}>{props.title}<br/>
							{props.subtitle}</info1>
			<p style={{padding: 50}}>{props.policy}</p>
			<li><Link href="/">Home Page</Link></li>
		</main>
	</div>
	)
}

import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'Policy.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}
