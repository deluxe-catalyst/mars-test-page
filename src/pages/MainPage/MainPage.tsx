import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import { button, titles } from '../../content/MainPageContent';
import classes from './MainPage.module.scss';

export default function MainPage() {
  return (
    <main className={classes['container']}>
      <section className={classes['container__section']}>
        <div className={classes['section__wrapper']}>
          <div className={classes['section__text']}>
            <h1 className={classes['text__title']}>{titles.title}</h1>
            <h2 className={classes['text__description']}>{titles.description}</h2>
          </div>
          <Button className='hollow-button'>{button}</Button>
        </div>
      </section>
    </main>
  );
};

const tilesBlock = () => {
  return (
    <div className={classes['section__tiles']}>
      <h1></h1>
      <h2></h2>
    </div>
  )
}