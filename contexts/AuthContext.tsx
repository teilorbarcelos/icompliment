import { createContext } from "react";

interface IAuthContext {
    isAuthenticated: boolean
}

const AuthContext = createContext({} as IAuthContext)

export function AuthProvider({children}: any){
    const isAuthenticated = false
    return (
        <AuthContext.Provider value={{isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}