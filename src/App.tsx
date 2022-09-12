import {FC} from 'react';
import './App.css';
import { Message } from './components/Message';

const App: FC = () => {

    const message = 'Привет мир'
        return (
        <>
            <Message message = {message}/>
        </>
    );
}

export default App;
