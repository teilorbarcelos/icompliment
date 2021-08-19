import { useState } from "react"


export default function auth() {
    const user = JSON.parse(document.cookie.split('=')[2])

    // verificar se o token é válido

    return user
}