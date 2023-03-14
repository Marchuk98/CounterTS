import React, {useEffect} from 'react';
import s from './Settings.module.css'
import SuperButton from "../Button/SuperButton";
import Input from "../Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {maxValueAC, SettingsStateType, startValueAC} from "../../state/settings-reducer";


const Settings = () => {

        const settingsState = useSelector<AppRootStateType,SettingsStateType>(state => state.settings)
        const dispatch = useDispatch()

    useEffect(() => {
        let newStartValueStr = localStorage.getItem("startValue")
        let newMaxValueStr = localStorage.getItem("maxValue")
        if (newStartValueStr && newMaxValueStr) {
            dispatch(startValueAC(JSON.parse(newStartValueStr)))
            dispatch(maxValueAC(JSON.parse(newMaxValueStr)))
        }
    }, [])

    const setSettingsToStorage = () => {
        localStorage.setItem('startValue', JSON.stringify(settingsState.startValue))
        localStorage.setItem('maxValue', JSON.stringify(settingsState.maxValue))
    }

    let maxValueError = (settingsState.maxValue <= 0 || settingsState.maxValue <= settingsState.startValue)
    let startValueError = (settingsState.startValue < 0 || settingsState.startValue >= settingsState.maxValue)

    return (
        <div className={s.mainSettingsBlock}>
            <div className={s.SettingsBlock}>
                <div className={s.nameElementText}>
                    <Input
                        title={"Start-Value"}
                        value={settingsState.startValue}
                        callBack={(value)=> {dispatch(startValueAC(value))}}/>
                </div>
                <div className={s.nameElementText}>
                    <Input
                        value={settingsState.maxValue}
                        title={"Max-Value"}
                        callBack={(value)=> {dispatch(maxValueAC(value))}}/>
                </div>
            </div>
            <div className={s.DisplayControlButton}>
                <SuperButton
                    name={'set'}
                    callBack={setSettingsToStorage}
                    disabled={maxValueError || startValueError}
                />
            </div>
        </div>
    );
};

export default Settings;