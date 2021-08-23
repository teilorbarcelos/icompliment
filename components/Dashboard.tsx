import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import Button1 from './Button1'
import Navbar from './Navbar'
import ReceivedCompliments from './ReceivedCompliments'
import SendedCompliments from './SendedCompliments'


export default function Dashboard() {
    const { auth, logout } = useContext(AuthContext)

    let dashboard = (<>
        <div className="login-navbar mb-9">
            <div className="link">
                <h4>
                    <Link href="/login">
                        <a>
                            Login
                        </a>
                    </Link>
                </h4>
            </div>
            <div className="link">
                <h4>
                    <Link href="/register">
                        <a>
                            Register
                        </a>
                    </Link>
                </h4>
            </div>
        </div>
        <div className="welcome-message mask flex flex-column">
            <h5 className="mb-5">Deixe aqui um elogio ou agradecimento a alguém!</h5>
            <h5>ou receba um elogio você também!</h5>
        </div>
    </>)

    if (auth) {
        dashboard = (<>
            <div className="profile">

                <Navbar />

                <SendedCompliments />

                <ReceivedCompliments />

            </div>
        </>)
    }

    return (dashboard)
}