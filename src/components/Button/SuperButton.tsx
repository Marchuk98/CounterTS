import React from 'react';
import s from './SuperButton.module.css'

type SuperButtonPropsType = {
    name:string
    callBack:() => void
    disabled?: boolean
}


const SuperButton = (props: SuperButtonPropsType) => {

    const onClickInButtonHandler = () => {
        props.callBack();
    }

    return (
        <div>
            <button className={s.ButtonInc} disabled={props.disabled} onClick={onClickInButtonHandler}>{props.name}</button>
        </div>
    );
};

export default SuperButton;