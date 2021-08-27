import { NextPage } from 'next'
import Head from 'next/head'
import { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import Background from '../components/Background'
import Dashboard from '../components/Dashboard'
import Welcome from '../components/Welcome'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  const { auth } = useContext(AuthContext)

  return (
    <>

      {/* HEAD */}

      <Head>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500&display=swap" rel="stylesheet" />

        <title>I compliment!</title>
      </Head>

      {/* Background */}

      <Background />

      <main>
        {auth ?
          <>
            <Navbar />
            <Dashboard />
          </>
          :
          <>
            <Welcome />
          </>
        }

        <Footer />
        
      </main>
    </>
  )
}

export default Home