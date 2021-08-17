import Link from 'next/link'


export default function RegisterForm(){
    return (
        <>
            <Link href="/login"><a>Já tenho uma conta!</a></Link>
            <Link href="/"><a>Voltar para a página inicial!</a></Link>
        </>
    )
}