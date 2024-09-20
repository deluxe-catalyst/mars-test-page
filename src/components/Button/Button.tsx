import classes from './Button.module.scss'
import btnIndicator from '../../assets/images/btn-indicator.svg'
import angle from '../../assets/images/left-bottom-angle.svg'

interface Props {
    children: React.ReactNode;
    className: 'hollow-button';
}

export default function Button(props: Props) {
    return (
        <div className={classes['btn']}>
            <button className={classes[props.className]}>
                {props.className === 'hollow-button' && <img className={classes['left-bottom-angle']} src={angle}/>}
                {props.className === 'hollow-button' && <img className={classes['right-top-angle']} src={angle}/>}
                {props.children}
            </button>
            {props.className === 'hollow-button' && <img className={classes['btn__indicator']} src={btnIndicator}/>}


        </div>
    )
}