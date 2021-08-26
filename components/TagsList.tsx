import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { AuthContext } from "../contexts/AuthContext"
import getTags from "../hooks/getTags"
import Button1 from "./Button1"

interface ITagCreate {
    name: string
}

export default function TagsList() {
    const { register, handleSubmit } = useForm()
    const { auth } = useContext(AuthContext)
    const [tags, setTags] = useState<any>(null)

    if (auth) {
        updateList(auth.token)
    }

    async function updateList(token: string) {
        const result = await getTags(token)

        const tagsList = result.map(tag => {
            return (
                <div className="tag">
                    <h4>{tag.nameCustom}</h4>
                </div>
            )
        })

        setTags(tagsList)
    }



    async function saveTag({ name }: ITagCreate) {
        const response = await fetch('https://valorize.herokuapp.com/tag/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth?.token}`
            },
            body: JSON.stringify({
                name
            })

        })

        const verifyResult = await response.json()

        if (await verifyResult.error) {
            alert(verifyResult.error)
            return
        }

        alert('Tag cadastrada com sucesso!')

        if (auth) {
            updateList(auth.token)
        }
    }

    return (
        <div className="tags-page">
            <h4>Lista de Tags: </h4>

            <div className="tags-list">

                {tags}

            </div>
            <form onSubmit={handleSubmit(saveTag)} method="post">
            <div className="new-tag-form">
                        <div>
                            <label htmlFor="name">Nome: </label>
                            <input
                                {...register('name')}
                                name="name"
                                id="name"
                                required
                                type="text"
                            />
                        </div>
                        <Button1>Cadastrar Tag</Button1>
                    </div>
            </form>

        </div>
    )
}