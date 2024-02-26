import React, { useState, useEffect} from 'react';
import './styles.css';
import { SelectedGameProps } from "components/types";

import {
  nthNumber,
  removeTags,
  descFormat,
  toggleStyles,
  dateAvailable,
  descResponsive
} from "components/helpers";

const SelectedGame: React.FC<SelectedGameProps> = ({ game, images, weekSelected }) => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const isMobile = width <= 768;

  const full = game && game.imageFilenameFull ? game.imageFilenameFull : 'none';
  const imgUrl = images.find(element => element.includes(full)) || '';

  const windowResize = () =>
    setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', windowResize);
    return () => 
      window.removeEventListener('resize', windowResize);
  }, []);

  return (
    <React.Fragment>
      {!!weekSelected &&
        <div className="selected-container">
          <div className="selected" style={{backgroundImage: `url(/assets/${imgUrl})`}}>
            <img src={`/assets/${imgUrl}`} style={{display: "none"}} />
            <div className="about-event">
              <div 
                className="Description"
                style={descResponsive(isMobile)}
              >{descFormat(game)} {removeTags(!!game ? game.summary : '')}
              </div>
              <div className="pre-order">
                <div className="available">Available {dateAvailable(!!game ? game.dom : '')}</div>
                <button
                  className="button learn-more"
                  onClick={() => window.open(!!game ? game.learnMoreLink : '', '_blank')}>
                  Learn More
                </button>
                <button
                  className="button pre-order-now"
                  onClick={() => window.open(!!game ? game.purchaseLink : '', '_blank')}>
                  Pre Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </React.Fragment>
  );
};

export default SelectedGame;
