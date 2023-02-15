import React, {useEffect, useState} from 'react';
import './App.css';
import Display from "./components/Counter/Display";
import Settings from "./components/Settings/Settings";

function App() {


    let [valueSettings, setValueSettings] = useState({
        startValue: 0,
        maxValue: 0,
    })
    const [increment, setIncrement] = useState<number>(0);
    const [error, setError] = useState<boolean>(false)


    useEffect(() => {
        let newStartValueStr = localStorage.getItem("startValue")
        let newMaxValueStr = localStorage.getItem("maxValue")
        if (newStartValueStr && newMaxValueStr) {
            let newStartValue = JSON.parse(newStartValueStr)
            let newMaxValue = JSON.parse(newMaxValueStr)
            setValueSettings({...valueSettings, startValue: newStartValue, maxValue: newMaxValue})
            setIncrement(valueSettings.startValue)
        }
    }, [])

    const setSettingsToStorage = () => {
        localStorage.setItem('startValue', JSON.stringify(valueSettings.startValue))
        localStorage.setItem('maxValue', JSON.stringify(valueSettings.maxValue))
        setIncrement(valueSettings.startValue)
    }

    const incrementCounter = () => {
        setIncrement(increment + 1)
    }

    const resetCounter = () => {
        setIncrement(valueSettings.startValue)
    }

    const startValue = (startValue: number) => {
        setValueSettings({...valueSettings, startValue: startValue})
    }
    const maxValue = (maxValue: number) => {
        setValueSettings({...valueSettings, maxValue: maxValue})
    }

    return (
        <div className='App'>
            <Settings
                key={'startValue' || 'maxValue'}
                incrementCounter={increment}
                maxValue={valueSettings.maxValue}
                startValue={valueSettings.startValue}
                startSettingsValue={startValue}
                maxSettingsValue={maxValue}
                error={error}
                setSettingsToStorage={setSettingsToStorage}/>
            <div>
                <Display
                    resetCounter={resetCounter}
                    incrementCounter={incrementCounter}
                    increment={increment}
                    maxValue={valueSettings.maxValue}
                    startValue={valueSettings.startValue}
                    error={error}/>
            </div>

        </div>
    );
}

export default App;


// className={'AppButtonBlock'}
