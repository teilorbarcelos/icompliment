import Link from 'next/link'


export default function LoginForm(){
    return (
        <>
            <Link href="/register"><a>Ainda não tenho uma conta!</a></Link>
            <Link href="/"><a>Voltar para a página inicial!</a></Link>
        </>
    )
}