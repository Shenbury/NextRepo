import type { NextPage } from 'next'
import Loader from '../components/Loader'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Loader show={true} />
    </div>
  )
}

export default Home
