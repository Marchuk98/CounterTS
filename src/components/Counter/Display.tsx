import React from 'react';
import d from './Display.module.css'
import SuperButton from "../Button/SuperButton";


type DisplayPropsType = {
    increment: number
    maxValue:number
    startValue:number
    error:boolean
    incrementCounter:()=> void
    resetCounter:()=> void

}


const Display = (props: DisplayPropsType) => {


    return (
        <div className={d.mainBlock}>
            <div className={props.increment >= props.maxValue ? d.AttentionDisplayBlock:d.displayBlock} >{props.increment}</div>

            <div className={d.DisplayControlButton}>
            <SuperButton name={"inc"}
                         callBack={props.incrementCounter}
                         disabled={props.increment >= props.maxValue}/>
            <SuperButton name={"reset"}
                         callBack={props.resetCounter}
                         disabled={props.increment <= props.startValue}/>
            </div>
        </div>
    );
};

export default Display;