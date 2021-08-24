interface ICompliment {
    id: number
    message: string
    tag_id: number
    user_receiver: number
    user_sender: number
}

interface ICompliments {
    error: string
    complimentsReceived: [ICompliment]
    complimentsSend: [ICompliment]
}

export default async function getCompliments(token: string) {
    const response = await fetch('https://valorize.herokuapp.com/compliments/list', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

    })

    const result: ICompliments = await response.json()

    if (result.error) {
        alert(result.error)
        return
    }

    return result
}