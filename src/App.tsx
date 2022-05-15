import React, {useCallback, useEffect, useState} from 'react'
import User from "./components/user/User";
import ScrollObserver from "./components/scroll-observer";
import brand from "./assets/image/brand.svg";
import hero_bg from "./assets/image/hero_bg.jpg";
import {ReactComponent as ArrowSvg} from "./assets/image/arrow.svg";
import Presentation from "./components/presentation";

const App: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);

  useEffect(() => {
    setTimeout(() => handleImageLoaded(), 300);
  })

  function handleArrow(el: string) {
    const element = document.querySelector(el)
    const topPos = element!.getBoundingClientRect().top + window.scrollY
    window.scrollTo({
      top: topPos,
      behavior: 'smooth',
    })
  }

  return (
    <div className="App">
      <ScrollObserver>
        <header className="app__header">
          <div className="header__container">
            <div className="header__wrapper">
              <div className={'header__brand'}>
                <img className={"header__brand-img"} src={brand} alt="Guest House"/>
              </div>
              <div className="header__nav">
                <a href={"/"} className="nav__link active">Start</a>
                <a href={"/user"} className="nav__link">Contact</a>
                <a href={"/toggle"} className="nav__link">Our history</a>
              </div>
              <div>
                <button className="btn">Book Now</button>
              </div>
            </div>
          </div>
        </header>
        <section className="app__hero" style={{backgroundImage: `url(${hero_bg}`}}>
          <div className="hero__container">
            <div className="app__hero-brand">
              <img src={brand} alt="Guest House"/>
            </div>
            <h1 className="app__title">
              Experience the perfect combination of modern housing & natural scenery.
            </h1>
            <div className="hero__brand-location">
              Located in Lofoten, norway
            </div>
            <i className={`hero__link-more ${imageLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
              <ArrowSvg onClick={() => handleArrow('#BookInfo')}/>
            </i>
          </div>
        </section>
        <section className="book__info" id="BookInfo">
          <div className="info__content animate__line">
            <div className="info__content-wrapper">
              <p> The Guest House is the perfect weekend get-away housing. Located in the Norwegian archipelago, Lofoten,
              it's a great escape from the hustle and bustle of the city. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur.
              Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.</p>
              <p>
              Below you'll find information about the accommodation and what's included in the price. Don't hesitate to
              reach out to us vi the contact page if you have any questions around your stay.</p>
              <button className="btn__info bg-primary">Book Now</button>
            </div>
          </div>
        </section>
        <Presentation />
        <section className="book__info" id="BookInfo">
          <div className="info__content animate__line">
            <div className="info__content-wrapper">
              <p> The Guest House is the perfect weekend get-away housing. Located in the Norwegian archipelago, Lofoten,
                it's a great escape from the hustle and bustle of the city. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur.
                Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.</p>
              <p>
                Below you'll find information about the accommodation and what's included in the price. Don't hesitate to
                reach out to us vi the contact page if you have any questions around your stay.</p>
              <button className="btn__info">Book Now</button>
            </div>
          </div>
        </section>
        <User/>

      </ScrollObserver>
    </div>
  );
}

export default App;
