import React, {FC, useEffect, useRef, useState} from 'react';
import {Message} from "./message/Message";
import {IMessage} from "../../types/types";
import s from "./chat.module.scss"
import {Form} from './form/Form';

export const Chat: FC = () => {
    const [value, setValue] = useState('')
    const [message, setMessage] = useState<IMessage[]>([])
    const inputRef = useRef<HTMLInputElement>(null)
    const messageListRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // @ts-ignore
        if (messageListRef.current?.clientHeight > 370) {
            console.log('f')
            messageListRef.current?.scrollBy(0, 1000)
        }
    },[message])

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
            inputRef.current?.focus()
        }
    }

    return (
        <div className={s.chat}>
            <div className={s.send}>
                <Form value={value} inputRef={inputRef} setValue={setValue} addMessage={addMessage}/>
            </div>
            <Message messageListRef={messageListRef} message={message}/>
        </div>
    );
}