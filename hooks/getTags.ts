interface ITag {
    id: number
    name: string
    nameCustom: string
}

export default async function getTags(token: string) {
    const response = await fetch('https://valorize.herokuapp.com/tags/list', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

    })

    const result: ITag[] = await response.json()

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