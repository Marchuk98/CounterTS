import React from 'react';
import s from './Display.module.css'


type DisplayPropsType = {
    count: number
    limit: number
}


const Display = (props: DisplayPropsType) => {
    return (
        <div className={s.mainBlock}>
            <div className={props.count !== props.limit ? s.displayBlock : s.AttentionDisplayBlock}>{props.count}</div>
        </div>
    );
};

export default Display;