import styles from '../../styles/TextGenerator.module.css'
import Head from 'next/head'

export default function TextGenerator() {
  return (
    <>
      <Head>
        <title>Text Generator</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.blueText}>IA Generator</span>
        </h1>

        <p className={styles.description}>
          Choose your generator
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>Text &rarr;</h2>
            <p>Start your history and let the IA complete it for you</p>
          </a>
        </div>
      </main>
    </>
  )
}
