import { ButtonHTMLAttributes } from "react";


export default function Button1(props: ButtonHTMLAttributes<HTMLButtonElement>){
    return (
        <button className={`button1`} type="submit" {...props} />
    )
}