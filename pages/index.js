import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Buy my products</h1>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>Product 1 &rarr;</h2>
            <p>$49.99</p>
            {/* price_1MEdbhJp3hKD1Is502i74thZ */}
          </a>

          <a href="" className={styles.card}>
            <h2>Product 2 &rarr;</h2>
            <p>$34.95</p>
            {/* price_1MEdbzJp3hKD1Is52hLX4jbV */}
          </a>
        </div>
      </main>
    </div>
  )
}
