import type { NextPage } from 'next'
import Head from 'next/head'
import Background from '../components/Background'

const Home: NextPage = () => {
  return (

    <main>

      {/* HEAD */}

      <Head>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500&display=swap" rel="stylesheet" />
        
        <title>I compliment!</title>
      </Head>
      
      <Background />

    </main>
  )
}

export default Home