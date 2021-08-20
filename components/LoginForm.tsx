import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import Button1 from './Button1'

interface ICredentials {
    email: string
    password: string
}

export default function LoginForm() {
    const {register, handleSubmit} = useForm()
    const router = useRouter()

    async function signIn({email, password}: ICredentials) {
        
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

        if(result.error){
            alert(result.error)
            return
        }

        // efetua o login...

        router.push('/')

    }

    return (
        <>
            <div className="float-box">

                <div className="my-1">
                    <h4>Login</h4>
                </div>

                <form onSubmit={handleSubmit(signIn)} method="post">

                    <div className="input">
                        <label htmlFor="email">E-mail</label>
                        <input
                            {...register('email')}
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="e-mail"
                        />
                    </div>

                    <div className="input">
                        <label htmlFor="password">Senha</label>
                        <input
                            {...register('password')}
                            id="password"
                            name="password"
                            type="password"
                            required
                            placeholder="Password"
                        />
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