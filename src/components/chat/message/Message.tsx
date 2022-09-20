import React from 'react';
import {nanoid} from "nanoid";
import {IMessage} from "../../../types/types";
import s from "./message.module.scss"

interface MessageProps {
    message: IMessage[]
}

export const Message = ({message}: MessageProps) => {

    return (
        <div className={s.listItems}>
            {message.map((el: IMessage) => (
                <p
                    className={s.listItem}
                    key={nanoid()}>
                    {el.author} {el.text}
                </p>
                ))
            }
        </div>
    );
}
