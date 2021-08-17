import Link from 'next/link'


export default function Dashboard(){
    return (
        <>
            {/* Home not logued */}

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
        </>
    )
}