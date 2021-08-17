import Head from 'next/head'
import Background from '../components/Background'
import LoginForm from '../components/LoginForm'

export default function Home() {
  return (
    <>

      {/* HEAD */}

      <Head>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500&display=swap" rel="stylesheet" />
        
        <title>Login</title>
      </Head>
      
      {/* Background */}

      <Background />

      <main>
          
          <LoginForm />

      </main>
    </>
  )
}