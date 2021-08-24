import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import getCompliments from "../hooks/getCompliments"

interface ICompliment {
    id: number
    message: string
    tag_id: number
    user_receiver: number
    user_sender: number
}

export default function SendedCompliments() {
    const { auth } = useContext(AuthContext)
    const [compliments, setCompliments] = useState<any>(null)

    if (auth) {
        get(auth.token)
    }

    async function get(token: string){
        const result = await getCompliments(token)
        
        const complimentsList = result?.complimentsSend.map((compliment: ICompliment) => {
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