import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Head from '@/components/Home/Head'
import AboutMe from '@/components/Home/AboutMe'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div style={{ marginLeft: '70px', marginTop: '50px',marginRight: '50px'}}>
        <Head ></Head>
        <AboutMe></AboutMe>
      </div>
    </>
  )
}
