import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <input type="number" placeholder='enter a number'/>
      <input type="number" placeholder='enter a number'/>
      <div>= 10</div>
    </main>
  )
}
