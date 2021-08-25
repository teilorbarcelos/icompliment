import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import Button1 from './Button1'

export default function Navbar() {
    const { auth, logout } = useContext(AuthContext)
    return (
        <div className="navbar">
            <div className="welcome-user">
                <h6>Olá {auth?.user.name}</h6>
            </div>
            <div className="logued-user">
                <h6>Logado com {auth?.user.email}</h6>
                <Button1 onClick={() => logout()}>Logout</Button1>
            </div>
        </div>
    )
}