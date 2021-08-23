import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import Button1 from './Button1'

export default function Navbar() {
    const { auth, logout } = useContext(AuthContext)
    return (
        <div className="dashboard-navbar">
            <div className="welcome-user">
                <h5>Olá {auth?.user.name}</h5>
            </div>
            <div className="logued-user">
                <h5>Logado com {auth?.user.email}</h5>
                <Button1 onClick={() => logout()}>Logout</Button1>
            </div>
        </div>
    )
}