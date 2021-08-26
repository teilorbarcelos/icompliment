interface IUser {
    id: number
    name: string
    email: string
    admin: boolean
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

    const result: IUser[] = await response.json()

    // if (result.error) {
    //     alert(result.error)
    //     return
    // }

    return result.sort(
        (a, b) => (
            a.name.toUpperCase() < b.name.toUpperCase() ? -1 :
                a.name.toUpperCase() > b.name.toUpperCase() ? 1 :
                    0
        )
    )
}