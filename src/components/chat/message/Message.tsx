import React from 'react';
import {nanoid} from "nanoid";
import {IMessage} from "../../../types/types";
import s from "./message.module.scss"

interface MessageProps {
    message: IMessage[]
}

export const Message = ({message}: MessageProps) => {
        return (
            <ul className={s.listItems}>
                {message.map((el:IMessage) => <li className={s.listItem} key={nanoid()}>{el.author} {el.text}</li>)}
            </ul>
        );

}
