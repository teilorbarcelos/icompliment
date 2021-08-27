import { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Background from '../components/Background'
import Navbar from '../components/Navbar'
import RegisteredUsers from '../components/RegisteredUsers'
import TagsList from '../components/TagsList'
import Footer from '../components/Footer'

const manage_tags: NextPage = () => {
    return (
        <>

            {/* HEAD */}

            <Head>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500&display=swap" rel="stylesheet" />

                <title>Lista de Tags!</title>
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
                    
                    <TagsList />

                </div>

                <Footer />

            </main>
        </>
    )
}

export default manage_tags