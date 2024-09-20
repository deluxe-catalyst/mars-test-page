import Button from '../../components/Button/Button';
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
          <div className={classes['section__button']}>
            <Button className='hollow-button'>{button}</Button>
          </div>
        </div>
        <TilesBlock />
      </section>
    </main>
  );
};

const TilesBlock = () => {
  return (
    <div className={classes['section__tiles']}>
      <div className={classes['tiles__row']}>
        <Tile />
        <Tile />
      </div>
      <div className={classes['tiles__row']}>
        <Tile />
        <Tile />
      </div>
    </div>

  )
}

const Tile = () => {
  return (
    <div className={classes['tiles__item']}>
      <p className={classes['item__text-1']}>на</p>
      <h1 className={classes['item__text-2']}>1</h1>
      <p className={classes['item__text-3']}>месте</p>
    </div>
  )

}