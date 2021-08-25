import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import getUsers from "../hooks/getUsers"

interface IUser {
    id: number
    name: string
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

        const usersList = result?.map((user: IUser) => {
            return (
                <div className="user" key={user.id}>
                    <h5>{user.name}</h5>
                </div>
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