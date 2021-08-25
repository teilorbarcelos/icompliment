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

export default function ReceivedCompliments() {
    const { auth } = useContext(AuthContext)
    const [compliments, setCompliments] = useState<any>(null)

    if (auth) {
        verifyCompliments(auth.token)
    }

    async function verifyCompliments(token: string) {
        const result = await getCompliments(token)

        const complimentsList = result?.complimentsReceived.map((compliment: ICompliment) => {
            return (
                <div className="compliment" key={compliment.id}>
                    <div className="header">
                        <h5>De: {compliment.userSender.name}</h5>
                        <h6 className="mask">{compliment.tag.nameCustom}</h6>
                    </div>
                    <div className="compliment-message">
                        <h6>
                            {`"${compliment.message}"`}
                        </h6>
                    </div>
                </div>
            )
        })

        setCompliments(complimentsList)
    }

    return (
        <div className="user-compliments">
            <div>
                <h4>
                    Elogios recebidos:
                </h4>
            </div>

            {compliments}


        </div>
    )
}