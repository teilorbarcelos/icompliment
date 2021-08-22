import Link from 'next/link'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../contexts/AuthContext'
import Button1 from './Button1'

export default function RegisterForm() {
    const {login} = useContext(AuthContext)
    const {register, handleSubmit} = useForm()

    async function registerUser(data: any) {
        
        if(data.name.trim() == ''){
            alert('Choose a valid name!')
            return
        }
        
        const response = await fetch('https://valorize.herokuapp.com/user/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                password: data.password
            })
        })

        const result = await response.json()

        if(result.error){
            alert(result.error)
            return
        }

        const user = {
            email: data.email,
            password: data.password
        }

        login(user)
    }

    return (
        <>
            <div className="float-box">

                <div className="my-1">
                    <h4>Registrar-se</h4>
                </div>

                <form onSubmit={handleSubmit(registerUser)} method="post">

                    <div className="input">
                        <label htmlFor="name">Nome</label>
                        <input
                            {...register('name')}
                            id="name"
                            name="name"
                            type="text" />
                    </div>

                    <div className="input">
                        <label htmlFor="email">E-mail</label>
                        <input
                            {...register('email')}
                            id="email"
                            name="email"
                            type="email" />
                    </div>

                    <div className="input">
                        <label htmlFor="password">Senha</label>
                        <input
                            {...register('password')}
                            id="password"
                            name="password"
                            type="password" />
                    </div>

                    <div className="input">
                        <label htmlFor="password2">Repita a senha</label>
                        <input
                            {...register('password2')}
                            id="password2"
                            name="password2"
                            type="password" />
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