import { setCookie } from "nookies";
import { createContext } from "react";

interface IAuthContext {
    isAuthenticated: boolean
}

interface ICredentials {
    email: string
    password: string
}

const AuthContext = createContext({} as IAuthContext)

export function AuthProvider({children}: any){
    const isAuthenticated = false

    async function login({email, password}: ICredentials) {

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

        if(user.error){
            alert(user.error)
            return
        }

        setCookie(undefined, 'icompliment:user', JSON.stringify(user), {
            maxAge: 60 * 60 * 24 // 1 dia de duração
        })
    }

    return (
        <AuthContext.Provider value={{isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}