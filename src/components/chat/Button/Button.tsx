import React, {useEffect} from 'react';
import {IMessage} from "../../../types/types";
import s from "./button.module.scss"

interface ButtonProps {
    message: IMessage[]
    value: string;
    setMessage: Function
    setValue: Function
}

export const Button = ({message, setMessage, value, setValue}: ButtonProps) => {

    useEffect(() => {
        window.addEventListener("keydown", (e) =>{
            if(e.key === 'Enter' && value.length) {
                addMessage()
            }
        })
    })

    const addMessage = () => {
        if(value.length > 0) {
            setMessage([...message,
                {author: 'User: ', text: value}])
            setValue('')
        }
    }
    return (
            <button className={s.button} disabled={!value} onClick={() =>addMessage()}>отправить</button>
    );
};