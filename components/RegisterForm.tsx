import Link from 'next/link'


export default function RegisterForm() {
    return (
        <>
            <div className="float-box">

                <div className="my-1">
                    <h3>Registrar-se</h3>
                </div>

                <div className="input">
                    <label htmlFor="name">Nome</label>
                    <input id="name" type="text" />
                </div>

                <div className="input">
                    <label htmlFor="email">E-mail</label>
                    <input id="email" type="email" />
                </div>

                <div className="input">
                    <label htmlFor="password">Senha</label>
                    <input id="password" type="password" />
                </div>

                <div className="input">
                    <label htmlFor="password2">Repita a senha</label>
                    <input id="password2" type="password" />
                </div>

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