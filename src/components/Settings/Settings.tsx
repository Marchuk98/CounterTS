import React from 'react';
import s from './Settings.module.css'
import SuperButton from "../Button/SuperButton";
import Input from "../Input/Input";


type SettingsPropsType = {
    incrementCounter: number
    maxValue: number
    startValue: number
    error:boolean
    startSettingsValue:(value:number)=>void
    maxSettingsValue:(value:number)=>void
    setSettingsToStorage:()=> void
}

const Settings = (props: SettingsPropsType) => {

        const InputClassName = s.InputElement + ' ' + (props.error ? s.errorInput: "")

    return (
        <div className={s.mainSettingsBlock}>
            <div className={s.SettingsBlock}>
                <div className={s.nameElementText}>
                    <Input
                        className={InputClassName}
                        title={"Start-Value"}
                        value={props.startValue}
                        callBack={props.startSettingsValue}/>
                </div>
                <div className={s.nameElementText}>
                    <Input
                        className={InputClassName}
                        value={props.maxValue}
                        title={"Max-Value"}
                        callBack={props.maxSettingsValue}/>
                </div>
            </div>
            <div className={s.DisplayControlButton}>
                <SuperButton
                    name={'set'}
                    callBack={props.setSettingsToStorage}
                    disabled={props.error}/>
            </div>
        </div>
    );
};

export default Settings;