import React, {useEffect, useRef, useState} from 'react';
import {IRooms} from "../../../types/types";
import s from "./chat.module.scss"
import {Form} from './form/Form';
import {Rooms} from "./rooms/Rooms";
import {Outlet, useParams} from "react-router-dom";

type chatProps = {
    messageListRef: any,
    message: any,
    setMessage: any
}

export const Chat = ({messageListRef, message, setMessage}:chatProps) => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const [rooms, setRooms] = useState<IRooms[]>([
        {
            idRoom: '1',
            name: 'Алерт',
            message: ['Привет ', 'меня зовут Алерт ', 'я люблю оповещать']
        },
        {
            idRoom: '2',
            name: 'Принтер',
            message: ['Привет ', 'меня зовут Принтер ', 'нужно что то распечатать, пиши']
        },
    ])

    useEffect(() => {
        if (messageListRef.current?.clientHeight) {
            messageListRef.current?.scrollBy(0, 1000)
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
            <Rooms rooms={rooms} setRooms={setRooms}/>
            <div className={s.chat}>
                {rooms.length === 0 && <div className={s.addRoom}>Добавьте комнату / чат</div>}
                {rooms.length !== 0 &&
                    <>
                        <div className={s.send}>
                            <Form value={value} inputRef={inputRef} setValue={setValue} addMessage={addMessage}/>
                        </div>
                        <Outlet/>
                    </>
                }
            </div>
        </>
    );
}