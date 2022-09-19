import React, {FC, useEffect, useState} from 'react';
import {Message} from "./message/Message";
import {Input} from "./input/Input";
import {Button} from "./Button/Button";
import {IMessage} from "../../types/types";
import s from "./chat.module.scss"


export const Chat: FC = () => {
    const [value, setValue] = useState('')
    const [message, setMessage] = useState<IMessage[]>([])

    useEffect(() => {
        if(message.at(-1)?.author === 'User: ') {
            const timeout = setTimeout(() => {
                setMessage([...message,
                    {author: 'Бот: ', text: 'я есть Грут'}])
            }, 1500)
            return () => {
                clearTimeout(timeout)
            }
        }
    }, [message])

    return (
        <div className={s.chat}>
            <div className={s.send}>
                <Input value={value} setValue={setValue}/>
                <Button setMessage={setMessage} message={message} value={value} setValue={setValue}/>
            </div>
            <Message message={message}/>
        </div>
    );
}