import { ButtonHTMLAttributes } from "react";


export default function Button2(props: ButtonHTMLAttributes<HTMLButtonElement>){
    return (
        <button className={`button2`} {...props} />
    )
}