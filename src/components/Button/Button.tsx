import classes from './Button.module.scss'

interface Props {
    children: React.ReactNode;
    className: 'hollow-button';
}

export default function Button(props: Props) {
    return (
        <button className={classes[props.className]}>
            {props.children}
        </button>
    )
}