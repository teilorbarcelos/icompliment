import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import Button1 from './Button1'


export default function LoginForm() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = async (event: FormEvent) => {

        event.preventDefault()
        
        const response = await fetch('https://valorize.herokuapp.com/user/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const result = await response.json()

        // console.log(result)
        // return

        if(result.error){
            alert(result.error)
            return
        }

        router.push('/')

    }

    return (
        <>
            <div className="float-box">

                <div className="my-1">
                    <h4>Login</h4>
                </div>

                <form onSubmit={login} method="post">

                    <div className="input">
                        <label htmlFor="email">E-mail</label>
                        <input id="email" onChange={event => setEmail(event.target.value)} type="email" />
                    </div>

                    <div className="input">
                        <label htmlFor="password">Senha</label>
                        <input id="password" onChange={event => setPassword(event.target.value)} type="password" />
                    </div>

                    <div className="send-button">
                        <Button1>Enviar</Button1>
                    </div>

                </form>

                <div className="my-1">
                    <Link href="/register"><a>Ainda não tenho uma conta!</a></Link>
                </div>

                <div className="my-1">
                    <Link href="/"><a>Voltar para a página inicial!</a></Link>
                </div>

            </div>

        </>
    )
}