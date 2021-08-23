import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"

interface ICompliments {
    complimentsSend: [
        {

        }
    ]
}

export default function SendedCompliments() {
    const { auth } = useContext(AuthContext)
    const [compliments, setCompliments] = useState()

    if (auth) {
        getCompliments(auth.token)
        // console.log(compliments)
    }

    async function getCompliments(token: string) {
        const response = await fetch('https://valorize.herokuapp.com/compliments/list', {
            method: 'GET',
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

        setCompliments(result)
    }

    return (
        <div className="sended-complaiments">
            <h4>
                Elogios enviados
            </h4>

            {/* {sendedCompliments} */}


        </div>
    )
}