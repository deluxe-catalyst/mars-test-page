import classes from './Button.module.scss'
import angle from '../../assets/images/icons/left-bottom-angle.svg'
import React from 'react';

interface Props {
    children: React.ReactNode;
    subImage?: string | undefined;
    toggle?: boolean;
    className: 'hollow-button' | 'header__button--close' | 'header__button--burger';
    onClick?: () => void;
}

export default function Button(props: Props) {
    if(props.className === 'header__button--close' || props.className === 'header__button--burger') {
        return (
            <button className={classes[props.className]} onClick={props.onClick}>
                {props.children}
            </button>
        )
    }
    return (
        <div className={classes['btn']}>
            <button className={classes[props.className]} onClick={props.onClick}>
                {props.className === 'hollow-button' && <img className={classes['left-bottom-angle']} src={angle} alt='угол'/>}
                {props.className === 'hollow-button' && <img className={classes['right-top-angle']} src={angle} alt='угол'/>}
                {props.children}
            </button>
            {props.subImage && <img className={classes['btn__indicator']} src={props.subImage} alt='угол'/>}
            
        </div>
    )
}