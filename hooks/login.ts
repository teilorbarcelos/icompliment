import setCookie from "./setCookie"


interface IUserCredentials {
    email: string | undefined
    password: string | undefined
}

export default async function login({email, password}: IUserCredentials){

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

    const user = await response.json()

    setCookie('icompliment:user', user)

    return user
    
}