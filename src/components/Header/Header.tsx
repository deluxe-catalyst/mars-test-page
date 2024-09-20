import classes from './Header.module.scss';
import SpaceXLogo from '../../assets/images/MainLogo.svg';
import navData from '../../content/HeaderNavContent';
export default function Header() {
    return (
    <header className={classes['header']}>
        <div className={classes['header__container']}>
            <img className={classes['header__logo']} src={SpaceXLogo}/>
            <HeaderMenu/>
        </div>
    </header>
  );
}

const HeaderMenu = () => {
    return(
        <nav className={classes['header__nav']}>
            <ul className={classes['nav__list']}>
                {navData.map((item, index) => {
                    return(
                        <li className={classes['nav__item']} key={index}>
                            <a className={classes['nav__link']} href={item.link}>{item.name}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}