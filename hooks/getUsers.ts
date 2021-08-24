interface IUser {
    id: number
    name: string
    email: string
    admin: boolean

}

interface IUsers extends Array<IUser>{
    error:string
}

export default async function getUsers(token: string) {
    const response = await fetch('https://valorize.herokuapp.com/users/list', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

    })

    const result: IUsers = await response.json()

    if (result.error) {
        alert(result.error)
        return
    }

    return result
}