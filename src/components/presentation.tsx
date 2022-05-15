import React, {memo, useContext, useRef} from "react";
import {ScrollContext} from "./scroll-observer";
import presentation_image from "../assets/image/presentation.jpg";


const Presentation: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const {scrollY} = useContext(ScrollContext);
  let progress = 0;
  const {current: elContainer} = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }
  return (
      <section className="presentation" ref={refContainer} style={{transform: `translateY(-${progress * 30}vh`, marginBottom: `-${progress * 30}vh`}}>
        <div className="container">
          <div className="presentation__content animate__line">
            <h2 className="presentation__title">
              The Guest House is the perfect weekend getaway cabin.
            </h2>
          </div>
        </div>
        <div className="presentation__image">
          <img src={presentation_image} alt=""/>
        </div>
      </section>
  );
}

export default memo(Presentation);



