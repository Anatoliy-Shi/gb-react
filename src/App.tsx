import React, {FC} from 'react';
import './App.css';
import {Navigate} from './components/navigate/Navigate';
import {Route, Routes} from "react-router-dom";
import {Main} from "./components/pages/main/Main";
import {Chat} from "./components/pages/chats/Chat";
import {Profile} from "./components/pages/profile/Profile";
import { NotFound } from './components/pages/notFound/NotFound';


const App: FC = () => {
    return (
        <>
                <Navigate/>
            <div className={'content'}>
                <Routes>
                    <Route path='/gb-react/main' element={<Main/>}/>
                    <Route path='/gb-react/chats' element={<Chat/>}/>
                    <Route path='/gb-react/profile' element={<Profile/>}/>
                    <Route path='/gb-react/*' element={<NotFound/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
