import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import getCompliments from "../hooks/getCompliments"

interface ICompliment {
    id: number
    message: string
    tag_id: number
    user_receiver: number
    user_sender: number
    userSender: IUser
    userReceiver: IUser
    tag: ITag
}

interface IUser {
    id: number
    name: string
}

interface ITag {
    id: number
    name: string
    nameCustom: string
}

export default function SendedCompliments() {
    const { auth } = useContext(AuthContext)
    const [compliments, setCompliments] = useState<any>(null)

    if (auth) {
        verifyCompliments(auth.token)
    }

    async function verifyCompliments(token: string){
        const result = await getCompliments(token)
        // console.log(result)
        
        const complimentsList = result?.complimentsSended.map((compliment: ICompliment) => {
            return (
                <h4 key={compliment.id}>{compliment.tag.nameCustom}</h4>
            )
        })

        setCompliments(complimentsList)
    }

    return (
        <div className="user-complaiments">
            <h4>
                Elogios enviados
            </h4>

            {compliments}


        </div>
    )
}