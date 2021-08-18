import Link from 'next/link'
import { FormEvent, useState } from 'react'
import Button1 from './Button1'
import fetch from 'node-fetch'


export default function RegisterForm() {
    const [registerName, setRegisterName] = useState('')
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [registerPassword2, setRegisterPassword2] = useState('')

    const register = async (event: FormEvent) => {

        event.preventDefault()
        
        const response = await fetch('https://valorize.herokuapp.com/user/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: registerName,
                email: registerEmail,
                password: registerPassword
            })
        })

        const result = await response.json()

        console.log(result)
    }

    return (
        <>
            <div className="float-box">

                <div className="my-1">
                    <h4>Registrar-se</h4>
                </div>

                <form onSubmit={register} method="post">

                    <div className="input">
                        <label htmlFor="name">Nome</label>
                        <input id="name" onChange={event => setRegisterName(event.target.value)} type="text" />
                    </div>

                    <div className="input">
                        <label htmlFor="email">E-mail</label>
                        <input id="email" onChange={event => setRegisterEmail(event.target.value)} type="email" />
                    </div>

                    <div className="input">
                        <label htmlFor="password">Senha</label>
                        <input id="password" onChange={event => setRegisterPassword(event.target.value)} type="password" />
                    </div>

                    <div className="input">
                        <label htmlFor="password2">Repita a senha</label>
                        <input id="password2" onChange={event => setRegisterPassword2(event.target.value)} type="password" />
                    </div>

                    <div className="send-button">
                        <Button1>Enviar</Button1>
                    </div>

                </form>

                <div className="my-1">
                    <Link href="/login"><a>Já tenho uma conta!</a></Link>
                </div>

                <div className="my-1">
                    <Link href="/"><a>Voltar para a página inicial!</a></Link>
                </div>

            </div>
        </>
    )
}