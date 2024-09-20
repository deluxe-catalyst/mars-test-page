import Button from '../../components/Button/Button';
import { button, tiles, titles } from '../../content/MainPageContent';
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
        <Tile tile={tiles[0]} />
        <Tile tile={tiles[1]} />
      </div>
      <div className={classes['tiles__row']}>
        <Tile tile={tiles[2]} />
        <Tile tile={tiles[3]} />
      </div>
    </div>

  )
}

interface TileProps {
  tile: {
    tileUpText: string,
    tileLargeText: string,
    tileDownText: string
  }
}

const Tile = (props: TileProps) => {
  return (
    <div className={classes['tiles__item']}>
      <p className={classes['item__text-1']}>{props.tile.tileUpText}</p>
      {
        props.tile.tileLargeText === '2001г.'
        ?
        <h1 className={classes['item__text-2']}>
          2001
          <span className={classes['text-2__span']}>г.</span>
        </h1>
        :
        <h1 className={classes['item__text-2']}>{props.tile.tileLargeText}</h1>
      }
      <p className={classes['item__text-3']}>{props.tile.tileDownText}</p>
    </div>
  )

}