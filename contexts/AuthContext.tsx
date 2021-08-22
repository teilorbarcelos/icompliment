import { useRouter } from "next/dist/client/router";
import { setCookie, parseCookies } from "nookies";
import { createContext, useEffect, useState } from "react";

interface IAuthContext {
    auth: IUser | null
    isAuthenticated: boolean
    login: (data: ICredentials) => Promise<void>
    logout: () => Promise<void>
}

interface ICredentials {
    email: string
    password: string
}

interface IUser {
    token: string
    user: {
        uid: number
        name: string
        email: string
    }
}

export const AuthContext = createContext({} as IAuthContext)

export function AuthProvider({ children }: any) {
    const [auth, setAuth] = useState<IUser | null>(null)
    const router = useRouter()
    const isAuthenticated = !!auth

    useEffect(() => { verifyUser() }, [])

    async function verifyUser() {
        const { 'icompliment:user': userCookie } = parseCookies()

        if (userCookie !== undefined) {

            const userCookieObj = JSON.parse(userCookie)
            const token = userCookieObj.token
            const user = await verifyToken(token)

            setAuth(user)
        }
    }

    async function verifyToken(token: string) {
        const response = await fetch('https://valorize.herokuapp.com/user/get', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                token
            })

        })

        const verifyResult = await response.json()

        if (await verifyResult.error) {
            alert(verifyResult.error)
            return
        }

        return verifyResult
    }

    async function login({ email, password }: ICredentials) {

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

        const loginResult = await response.json()

        if (loginResult.error) {
            alert(loginResult.error)
            return
        }

        setCookie(undefined, 'icompliment:user', JSON.stringify(loginResult), {
            maxAge: 60 * 60 * 24, // 1 dia de duração
            sameSite: 'none',
            secure: true
        })

        setAuth(loginResult)

        router.push('/')
    }

    async function logout() {
        setCookie(undefined, 'icompliment:user', '', {
            maxAge: 0, // invalidate the cookie
            sameSite: 'none',
            secure: true
        })

        setAuth(null)
    }

    return (
        <AuthContext.Provider value={{ auth, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}