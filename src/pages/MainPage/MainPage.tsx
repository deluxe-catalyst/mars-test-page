import Button from '../../components/Button/Button';
import { button, tiles, titles } from '../../content/MainPageContent';
import classes from './MainPage.module.scss';
import btnIndicator from '../../assets/images/icons/btn-indicator.svg'
import { useEffect, useState } from 'react';


export default function MainPage() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;

      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const btnStyle = {
    transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
  };

  return (
    <main className={classes['container']}>
      <ParallaxContainer />

      <section className={classes['container__section']}>
        <div className={classes['section__wrapper']}>
          <div className={classes['section__text']}>
            <h1 className={classes['text__title']}>{titles.title}</h1>
            <h2 className={classes['text__description']}>{titles.description}</h2>
          </div>
        </div>
        <div className={classes['section__button']} style={btnStyle}>
          <Button subImage={btnIndicator} className='hollow-button'>{button}</Button>
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
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const cards = document.querySelectorAll(`.${classes['tiles__wrapper']}`);
      cards.forEach((card) => {
        const cardElement = card as HTMLElement;
        const rect = cardElement.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        cardElement.style.setProperty("--x", `${x}px`);
        cardElement.style.setProperty("--y", `${y}px`);
      });
    };
    
  
    window.addEventListener('mousemove', handleMouseMove);
  
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={classes['tiles__wrapper']}>
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
    </div>

  )
}

const ParallaxContainer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const offset = {
    sky: 20,
    planet: 30,
    rocket: 40,
  }

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;

      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skyStyle = {
    transform: `translate(${mousePosition.x * offset.sky}px, ${mousePosition.y * offset.sky}px)`,
  };

  const planetStyle = {
    transform: `translate(${mousePosition.x * offset.planet}px, ${mousePosition.y * offset.planet}px)`,
  };

  const rocketStyle = {
    transform: `translate(${mousePosition.x * offset.rocket}px, ${mousePosition.y * offset.rocket}px)`,
  };

  return (
    <div className={classes['container__parallax']}>
      <div className={classes['container__parallax-sky']} style={skyStyle} />
      <div className={classes['container__parallax-planet']} style={planetStyle} />
      <div className={classes['container__rocket-image']} style={rocketStyle} />
    </div>
  );
};
