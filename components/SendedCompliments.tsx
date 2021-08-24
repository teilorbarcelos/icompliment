import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"

export default function SendedCompliments() {
    const { auth } = useContext(AuthContext)
    const [compliments, setCompliments] = useState<any>(null)

    if (auth) {
        getCompliments(auth.token)
    }


    async function getCompliments(token: string) {
        const response = await fetch('https://valorize.herokuapp.com/compliments/list', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }

        })

        const result = await response.json()

        if (await result.error) {
            alert(result.error)
            return
        }

        const complimentsList = result.complimentsSend.map((compliment: any) => {
            return (
                <h4 key={compliment.id}>#{compliment.message}</h4>
            )
        })

        setCompliments(complimentsList)
    }

    return (
        <div className="sended-complaiments">
            <h4>
                Elogios enviados
            </h4>

            {compliments}


        </div>
    )
}