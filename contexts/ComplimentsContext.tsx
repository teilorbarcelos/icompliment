import { createContext, useState } from "react";

interface IComplimentsContext {
    get: (token: string) => Promise<any>
}

export const ComplimentsContext = createContext({} as IComplimentsContext)

export function ComplimentsProvider({ children }: any) {
    
    async function get(token: string) {
        const response = await fetch('https://valorize.herokuapp.com/compliments/list', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }

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