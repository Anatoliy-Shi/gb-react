import React, {FormEvent, RefObject} from "react";
import s from "./form.module.scss"
import Button from '@mui/material/Button';
import {Input} from "@mui/material";

interface FormProps {
    value: string
    addMessage: Function
    setValue: Function
    inputRef: RefObject<HTMLInputElement>
}

export const Form = ({value, addMessage, setValue, inputRef}: FormProps) => {

    const sendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addMessage()
    }

    const clearInput = () => {
        setValue('')
        inputRef.current?.focus()
    }

    return (
        <form className={s.form}
              onSubmit={(e) => sendMessage(e)}>
            <Input
                type="text"
                inputRef={inputRef}
                autoFocus={true}
                sx={{'color' : '#002f6c', 'width': '300px', 'height': '35px', 'fontWeight': '600',
                    'fontSize': '18px', ' paddingLeft': '10px', 'outline': 'none'}}
                placeholder={'введите текст'}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {value &&
                <div onClick={()=> clearInput()} className={s.clear}>
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         viewBox="0 0 252 252">
                        <g>
                            <path
                                d="M126,0C56.523,0,0,56.523,0,126s56.523,126,126,126s126-56.523,126-126S195.477,0,126,0z M126,234 c-59.551,0-108-48.449-108-108S66.449,18,126,18s108,48.449,108,108S185.551,234,126,234z"></path>
                            <path
                                d="M164.612,87.388c-3.515-3.515-9.213-3.515-12.728,0L126,113.272l-25.885-25.885c-3.515-3.515-9.213-3.515-12.728,0 c-3.515,3.515-3.515,9.213,0,12.728L113.272,126l-25.885,25.885c-3.515,3.515-3.515,9.213,0,12.728 c1.757,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636L126,138.728l25.885,25.885c1.757,1.757,4.061,2.636,6.364,2.636 s4.606-0.879,6.364-2.636c3.515-3.515,3.515-9.213,0-12.728L138.728,126l25.885-25.885 C168.127,96.601,168.127,90.902,164.612,87.388z"></path>
                        </g>
                    </svg>
                </div>
            }
            <Button sx={{'borderRadius': '20px'}} variant="contained"
                    color="primary"
                    type={'submit'}
                    disabled={!value}
                    onClick={() => addMessage()}>отправить</Button>
        </form>
    )
}

