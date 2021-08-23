import { createContext, useState } from "react";

interface IComplimentsContext {
    get: (user: IUser) => Promise<any>
}

interface IUser {
    token: string
    user: {
        uid: number
        name: string
        email: string
    }
}
export const ComplimentsContext = createContext({} as IComplimentsContext)

export function ComplimentsProvider({ children }: any) {
    
    async function get(user: IUser) {
        const response = await fetch('https://valorize.herokuapp.com/user/compliments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            },
            body: JSON.stringify({
                user: user?.user.uid
            })

        })

        const compliments = await response.json()

        if (await compliments.error) {
            alert(compliments.error)
            return
        }

        return compliments
    }

    return (
        <ComplimentsContext.Provider value={{ get }}>
            {children}
        </ComplimentsContext.Provider>
    )
}