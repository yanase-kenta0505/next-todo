import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Button } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button colorScheme='blue'>test</Button>
    </div>
  )
}

export default Home
