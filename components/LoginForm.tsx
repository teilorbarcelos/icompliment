import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import Button1 from './Button1'
import { AuthContext } from '../contexts/AuthContext'
import Footer from './Footer'

interface ICredentials {
    email: string
    password: string
}

export default function LoginForm() {
    const { register, handleSubmit } = useForm()
    const router = useRouter()
    const { auth, login } = useContext(AuthContext)

    if (auth) {
        router.push('/')
    }

    async function signIn(data: ICredentials) {

        await login(data)

    }

    return (
        <>
            <div className="page">

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
                        <Link href="/register"><a>Ainda n??o tenho uma conta!</a></Link>
                    </div>

                    <div className="my-1">
                        <Link href="/"><a>Voltar para a p??gina inicial!</a></Link>
                    </div>

                    <Footer />

                </div>

            </div>
        </>
    )
}