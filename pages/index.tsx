import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Minha API de 100 frases motivacionais</h1>
      <h5>Para acessar a API clique em um dos links abaixo:</h5>

      <hr/>

      <h5>Listagem de todas as frases</h5>
      <Link href="/api/list/all">
        <a><u>/api/list/all</u></a>
      </Link>

      <h5>Listagem de uma frase aleatória</h5>
      <Link href="/api/list/random">
        <a><u>/api/list/random</u></a>
      </Link>

    </div>
  )
}



export default Home
