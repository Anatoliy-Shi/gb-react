import React, {FC, useEffect, useState} from 'react';
import {Message} from "./message/Message";
import {IMessage} from "../../types/types";
import s from "./chat.module.scss"
import { Form } from './form/Form';


export const Chat: FC = () => {
    const [value, setValue] = useState('')
    const [message, setMessage] = useState<IMessage[]>([])

    useEffect(() => {
        if (message.at(-1)?.author === 'User: ') {
            const timeout = setTimeout(() => {
                setMessage([...message,
                    {author: 'Бот: ', text: 'я есть Грут'}])
            }, 1500)
            return () => {
                clearTimeout(timeout)
            }
        }
    }, [message])

    const addMessage = () => {
        if (value.length > 0) {
            setMessage([...message,
                {author: 'User: ', text: value}])
            setValue('')
        }
    }



    return (
        <div className={s.chat}>
            <div className={s.send}>
                <Form value={value} setValue={setValue} addMessage={addMessage}/>
            </div>
            <Message message={message}/>
        </div>
    );
}