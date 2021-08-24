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

interface ICompliments {
    error: string
    complimentsReceived: [ICompliment]
    complimentsSended: [ICompliment]
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