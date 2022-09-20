import React, {FC} from 'react';
import './App.css';
import {Chat} from "./components/chat/Chat";
import Navigation from "./components/navigation/Navigation";

const App: FC = () => {
        return (
                <div className={'content'}>
                    <Navigation/>
                    <Chat/>
                </div>

    );
}

export default App;
