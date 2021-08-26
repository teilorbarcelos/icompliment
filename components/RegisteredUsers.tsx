import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import getUsers from "../hooks/getUsers"
import Link from 'next/link'

interface IUser {
    token: string
    user: IUserInfo
}

interface IUserInfo {
    id: number
    name: string
    email: string
    admin: boolean
}

export default function RegisteredUsers() {
    const { auth } = useContext(AuthContext)
    const [users, setUsers] = useState<any>(null)

    if (auth) {
        verifyUsers(auth.token)
    }

    async function verifyUsers(token: string) {
        const result = await getUsers(token)

        result.sort(
            (a, b) => (
                a.name.toUpperCase() < b.name.toUpperCase() ? -1 :
                    a.name.toUpperCase() > b.name.toUpperCase() ? 1 :
                        0
            )
        )

        const usersList = result?.map((user: IUserInfo) => {

            let userHTML = (
                <div className="user" title="Enviar elogio ou agradecimento" key={user.id}>
                    <h5>
                        <Link href={`/send_compliment/${user.id}`}>
                            <a>
                                {user.name}
                            </a>
                        </Link>
                    </h5>
                </div>
            )

            if (auth?.user.id == user.id) {
                userHTML = (
                    <div className="user" key={user.id}>
                        <h5>
                            {user.name}
                        </h5>
                    </div>
                )
            }

            return (
                userHTML
            )
        })

        setUsers(usersList)
    }

    return (
        <div className="user-list">
            <div>
                <h4>
                    Usuários Registrados:
                </h4>
            </div>

            {users}


        </div>
    )
}