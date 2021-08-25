import Link from 'next/link'
import { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export default function Dashboard() {
    const { auth } = useContext(AuthContext)

    return (
        <>
            <div className="profile mt-6">

                <h4>
                    <Link href="/sended_compliments">
                        <a>
                            Elogios Enviados
                        </a>
                    </Link>
                </h4>

                <h4>
                    <Link href="/received_compliments">
                        <a>
                            Elogios Recebidos
                        </a>
                    </Link>
                </h4>

                <h4>
                    <Link href="/registered_users">
                        <a>
                            Usuários cadastrados
                        </a>
                    </Link>
                </h4>

                {auth?.user.admin &&
                    <h4>
                        <Link href="/manage_tags">
                            <a>
                                Gerenciar Tags
                            </a>
                        </Link>
                    </h4>
                }

            </div>
        </>
    )
}