import React, {useEffect} from 'react';
import d from './Display.module.css'
import SuperButton from "../Button/SuperButton";
import {AppRootStateType, store} from "../../state/store";
import {useDispatch, useSelector} from "react-redux";
import {CounterStateType, incrementCounterAC, resetCounterAC} from "../../state/counter-reducer";
import {SettingsStateType} from "../../state/settings-reducer";

const Display = () => {

    const counterState = useSelector<AppRootStateType, CounterStateType>(state => store.getState().counter)
    const settingsState = useSelector<AppRootStateType, SettingsStateType>(state => store.getState().settings)
    const dispatch = useDispatch()

    useEffect(() => {
        counterState.counterValue = settingsState.startValue
    }, [])

    return (
        <div className={d.mainBlock}>
            <div className={counterState.counterValue >= settingsState.maxValue ? d.AttentionDisplayBlock:d.displayBlock} >{counterState.counterValue}</div>

            <div className={d.DisplayControlButton}>
            <SuperButton name={"inc"}
                         callBack={()=> {dispatch(incrementCounterAC())}}
                         disabled={counterState.counterValue >= settingsState.maxValue}/>
            <SuperButton name={"reset"}
                         callBack={()=> {dispatch(resetCounterAC(settingsState.startValue))}}
                         disabled={counterState.counterValue <= settingsState.startValue}/>
            </div>
        </div>
    );
};

export default Display;