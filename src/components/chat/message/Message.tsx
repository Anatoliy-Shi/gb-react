import React from 'react';
import {nanoid} from "nanoid";
import {IMessage} from "../../../types/types";
import s from "./message.module.scss"

interface MessageProps {
    message: IMessage[]
    messageListRef: any
}

export const Message = ({message, messageListRef}: MessageProps) => {

    return (
        <div ref={messageListRef} className={s.listItems}>
            {message.map((el: IMessage) => (
                <div
                    className={s.listItem}
                    key={nanoid()}>
                    <span className={s.author}>{el.author}</span>  <span className={s.text}>{el.text}</span>
                </div>
                ))}
        </div>
    );
}
