import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { ComplimentsContext } from "../contexts/ComplimentsContext"

export default function SendedCompliments() {
    const { auth } = useContext(AuthContext)
    const {get} = useContext(ComplimentsContext)

    if(auth){
        const SendedCompliments = get(auth.token)
    }



    return (
        <div className="sended-complaiments">



        </div>
    )
}