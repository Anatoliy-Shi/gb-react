import React from 'react';
import './../../App.css';
import {NavLink} from "react-router-dom";
import { styleNavLink } from '../../lib/activeNavigate';
import s from "./navigate.module.scss"
import {CustomLink} from "../CustomLink";


export const Navigate = () => {

    return (
            <ul className={s.lists}>
                <li>
                    <CustomLink
                        to="/gb-react">
                        Главная
                    </CustomLink>
                </li>
                <li>
                    <NavLink to={'gb-react/chats'}
                             style={styleNavLink}>
                        Чаты
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'gb-react/profile'}
                             style={styleNavLink}>
                        Профиль
                    </NavLink>
                </li>
            </ul>
    )
}


