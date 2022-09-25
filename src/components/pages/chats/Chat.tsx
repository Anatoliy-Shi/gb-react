import React, {FC, useEffect, useRef, useState} from 'react';
import {Message} from "./message/Message";
import {IMessage} from "../../../types/types";
import s from "./chat.module.scss"
import {Form} from './form/Form';
import {Rooms} from "./rooms/Rooms";

export const Chat: FC = () => {
    const [value, setValue] = useState('')
    const [message, setMessage] = useState<IMessage[]>([])
    const inputRef = useRef<HTMLInputElement>(null)
    const messageListRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (messageListRef.current?.clientHeight) {
            messageListRef.current?.scrollBy(0, 100)
        }
    }, [message])

    useEffect(() => {
        if (message.at(-1)?.author === 'User: ') {
            const timeout = setTimeout(() => {
                setMessage([...message,
                    {author: 'Бот: ', text: 'я Есть Грут'}])
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
        <>
            <Rooms/>
            <div className={s.chat}>
                <div className={s.send}>
                    <Form value={value} inputRef={inputRef} setValue={setValue} addMessage={addMessage}/>
                </div>
                <Message messageListRef={messageListRef} message={message}/>
            </div>
        </>
    );
}