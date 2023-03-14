import React, {useEffect} from 'react';
import './App.css';
import Display from "./components/Counter/Display";
import Settings from "./components/Settings/Settings";
import {store} from "./state/store";

function App() {

    useEffect(() => {
        store.getState().counter.counterValue = store.getState().settings.startValue
    }, [])

    return (
        <div className='App'>
            <Settings/>
            <div>
                <Display/>
            </div>

        </div>
    );
}

export default App;

