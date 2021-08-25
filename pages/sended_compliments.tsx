import { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Background from '../components/Background'
import SendedCompliments from '../components/SendedCompliments'
import Navbar from '../components/Navbar'

const sended_compliments: NextPage = () => {
    return (
        <>

            {/* HEAD */}

            <Head>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500&display=swap" rel="stylesheet" />

                <title>Agradecimentos e elogios enviados!</title>
            </Head>

            {/* Background */}

            <Background />

            <main>

                <Navbar />

                <div className="page mt-8">

                    <h5>
                        <Link href="/">
                            <a>
                                Dashboard
                            </a>
                        </Link>
                    </h5>

                    <SendedCompliments />

                </div>

            </main>
        </>
    )
}

export default sended_compliments