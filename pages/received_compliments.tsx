import { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Background from '../components/Background'
import ReceivedCompliments from '../components/ReceivedCompliments'

const received_compliments: NextPage = () => {
    return (
        <>

            {/* HEAD */}

            <Head>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500&display=swap" rel="stylesheet" />

                <title>Agradecimentos e elogios recebidos!</title>
            </Head>

            {/* Background */}

            <Background />

            <main>

                <h5>
                    <Link href="/">
                        <a>
                            Dashboard
                        </a>
                    </Link>
                </h5>
                
                <h4>Em Breve!</h4>

            </main>
        </>
    )
}

export default received_compliments