import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Minha API de 100 frases motivacionais</h1>
      <h5>Para acessar a API clique no link abaixo:</h5>
      <Link href="/api">
        <a><u>CLIQUE AQUI</u></a>
      </Link>
    </div>
  )
}



export default Home
