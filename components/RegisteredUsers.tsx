import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import getUsers from "../hooks/getUsers"
import Button2 from "./Button2"
import Button1 from "./Button1"
import { useForm } from "react-hook-form"
import getTags from "../hooks/getTags"

interface IUserInfo {
    id: number
    name: string
    email: string
    admin: boolean
}

interface ICompliment {
    user_receiver: number
    tag_id: number
    message: string

}

interface ITag {
    id: number
    name: string
    nameCustom: string
}

export default function RegisteredUsers() {
    const { register, handleSubmit } = useForm()
    const { auth } = useContext(AuthContext)
    const [users, setUsers] = useState<any>(null)
    const [sendCompliment, setSendCompliment] = useState<any>(null)
    const [tags, setTags] = useState<any>(null)

    async function updateTags(token: string) {
        const result = await getTags(token)

        result.sort(
            (a, b) => (
                a.name.toUpperCase() < b.name.toUpperCase() ? -1 :
                    a.name.toUpperCase() > b.name.toUpperCase() ? 1 :
                        0
            )
        )

        const selectTag = result.map(tag => {
            return <option key={tag.id} value={tag.id}>{tag.name}</option>
        })

        setTags(selectTag)
    }

    async function saveCompliment({ user_receiver, tag_id, message }: ICompliment) {
        const response = await fetch('https://valorize.herokuapp.com/compliment/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth?.token}`
            },
            body: JSON.stringify({
                user_receiver,
                tag_id,
                message
            })

        })

        const verifyResult = await response.json()

        if (await verifyResult.error) {
            alert(verifyResult.error)
            return
        }

        alert('Elogio enviado com sucesso!')

        setSendCompliment(null)
    }

    async function complimentModal(user: IUserInfo) {

        setSendCompliment(
            <div className="modal-overlay">
                <div className="modal">
                    <form onSubmit={handleSubmit(saveCompliment)} method="post">
                        <input
                            {...register('user_receiver')}
                            name="user_receiver"
                            id="user_receiver"
                            type="hidden"
                            value={user.id}
                        />
                        <h6>Enviar para {user.name}</h6>
                        <div className="tag my-1">
                            <label htmlFor="tag">Tag: </label>
                            <select
                                {...register('tag_id')}
                                name="tag_id"
                                id="tag_id"
                            >
                                {tags}
                            </select>
                        </div>
                        <div className="message flex flex-column my-1">
                            <label htmlFor="message">Mensagem: </label>
                            <textarea
                                {...register('message')}
                                className="my-1"
                                rows={7}
                                name="message"
                                id="message"
                            ></textarea>
                        </div>
                        <div className="buttons">
                            <Button2 onClick={() => setSendCompliment(null)}>Cancelar</Button2>
                            <Button1>Enviar</Button1>
                        </div>
                    </form>
                </div>
            </div>
        )

    }

    if (auth) {
        verifyUsers(auth.token)
        updateTags(auth.token)
    }

    async function verifyUsers(token: string) {
        const result = await getUsers(token)

        result.sort(
            (a, b) => (
                a.name.toUpperCase() < b.name.toUpperCase() ? -1 :
                    a.name.toUpperCase() > b.name.toUpperCase() ? 1 :
                        0
            )
        )

        const usersList = result?.map((user: IUserInfo) => {

            let userHTML = (
                <div
                    className="user pointer"
                    onClick={() => complimentModal(user)}
                    title="Enviar elogio ou agradecimento"
                    key={user.id}
                >
                    <h5>
                        <a>
                            {user.name}
                        </a>
                    </h5>
                </div>
            )

            if (auth?.user.id == user.id) {
                userHTML = (
                    <div className="user" key={user.id}>
                        <h5>
                            {user.name}
                        </h5>
                    </div>
                )
            }

            return (
                userHTML
            )
        })

        setUsers(usersList)
    }

    return (
        <div className="user-list">
            <div>
                <h4>
                    Usuários Registrados:
                </h4>
            </div>

            {users}

            {sendCompliment}


        </div>
    )
}