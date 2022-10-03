import React, {FC, useRef, useState} from 'react';
import './App.css';
import {Navigate} from './components/navigate/Navigate';
import {Route, Routes} from "react-router-dom";
import {Main} from "./components/pages/main/Main";
import {Chat} from "./components/pages/chats/Chat";
import {Profile} from "./components/pages/profile/Profile";
import {NotFound} from './components/pages/notFound/NotFound';
import {IMessage} from "./types/types";
import {Message} from './components/pages/chats/message/Message';
import {ThemeContext, themes} from "./context/context";
import {SwitchTheme} from "./components/switchTheme/SwitchTheme";


const App: FC = () => {
    const [message, setMessage] = useState<IMessage[]>([])
    const messageListRef = useRef<HTMLDivElement>(null)
    const [currentTheme, setCurrentTheme] = useState(themes.light);

    const toggleTheme = () => {
        setCurrentTheme(prevState => prevState === themes.light ? themes.dark : themes.light)
    }

    return (
        <>
            <ThemeContext.Provider value={{theme: currentTheme, toggleTheme: toggleTheme}}>
                <div  style={{background: currentTheme.background, color: currentTheme.textColor}} >
                    <div className={'container'}>
                        <div className={'footer'}>
                            <Navigate/>
                                <SwitchTheme/>
                        </div>
                    </div>

                    <div className={'content'}>
                        <Routes>
                            <Route path='/gb-react' element={<Main/>}/>
                            <Route path='/gb-react/chats/'
                                   element={<Chat message={message} setMessage={setMessage}
                                                  messageListRef={messageListRef}/>}>
                                <Route path=':id'
                                       element={<Message message={message} messageListRef={messageListRef}/>}/>
                            </Route>
                            <Route path='/gb-react/profile' element={<Profile/>}/>
                            <Route path='/gb-react/*' element={<NotFound/>}/>
                        </Routes>
                    </div>
                </div>
            </ThemeContext.Provider>
        </>
    )
        ;
}

export default App;
