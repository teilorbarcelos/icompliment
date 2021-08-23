import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"

export default function SendedCompliments() {
    const { auth } = useContext(AuthContext)
    let compliments: any = undefined
    let val

    async function getCompliments(){

        const response = await fetch('https://valorize.herokuapp.com/compliments/list', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth?.token}`
            }
    
        })
    
        const result = await response.json()
    
        if (await result.error) {
            alert(result.error)
            return
        }
        
        compliments = result

        // console.log(compliments.complimentsSend)

    }

    getCompliments().then(() => {

        if(compliments){
            console.log(compliments.complimentsSend)
        }

    })

    return (
        <>
        
            
        
        </>
    )

    // const { compliments } = useContext(ComplimentsContext)

    // let sendedCompliments = null

    // if (compliments && compliments.complimentsSend.length > 0) {
    //     sendedCompliments = compliments.complimentsSend.map((compliment: ICompliment | null) => {
    //         return (
    //             <div key={compliment?.id} className="sended-compliment">
    //                 <h4>#{compliment?.message}</h4>
    //             </div>
    //         )
    //     })
    // }

    // return (
    //     <>
    //         {sendedCompliments &&
    //             <>
    //                 <div className="sended-complaiments">
    //                     <h4>
    //                         Elogios enviados
    //                     </h4>

    //                     {sendedCompliments}


    //                 </div>
    //             </>
    //         }
    //     </>
    // )
}