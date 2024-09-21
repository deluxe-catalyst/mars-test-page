import classes from './Header.module.scss';
import SpaceXLogo from '../../assets/images/icons/MainLogo.svg';
import navData from '../../content/HeaderNavContent';
import menuFrame from '../../assets/images/icons/menu-frame.svg'
import { useEffect, useState } from 'react';
import Button from '../Button/Button';

export default function Header() {

    const [navShow, setNavShow] = useState(true);

    function toggleNav() {
        setNavShow(navShow === true ? false : true);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 991) {
                setNavShow(true);
            }
            if (window.innerWidth < 991) {
                setNavShow(false);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize) };
    }, []);

    return (
        <header className={classes['header']}>
            <div className={classes['header__container']}>
                <img className={classes['header__logo']} src={SpaceXLogo} alt='SpaceX' />
                <Button className={navShow ? 'header__button--close' : 'header__button--burger'} onClick={toggleNav}>
                    <img className={classes['header__btn']} src={menuFrame} onClick={toggleNav} alt='Меню'/>
                </Button>
                <HeaderMenu toggleNav={navShow} />
            </div>
        </header>
    );
}

const HeaderMenu = (props: { toggleNav: boolean }) => {

    return (
        <ul className={props.toggleNav ? classes['nav__list--show'] : classes['nav__list--hide']}>
            {navData.map((item, index) => {
                return (
                    <li className={props.toggleNav ? classes['nav__item--show'] : classes['nav__item--hide']} key={index}>
                        <a className={classes['nav__link']} href={item.link}>{item.name}</a>
                    </li>
                )
            })}
        </ul>
    )
}

