import React from 'react';
import './styles.css';
import { WeekDayProps } from "components/types";

const WeekDay: React.FC<WeekDayProps> = ({
  game,
  week,
  images,
  gameSelected,
  setWeekSelected,
  setGameSelected
}) => {
  
  const thumb = game && game.imageFilenameThumb ? game.imageFilenameThumb : 'none';
  const addEvent = thumb !== 'none';
  const imgUrl = `/assets/` + images.find(element => element.includes(thumb)) || '';

  const testId = !!game ? game.dom : '';
  let cardClass = addEvent ? "card game-event" : "card";
  cardClass = !!game && !game.prevMonth ? cardClass:`${cardClass} prev-month`;

  const border = addEvent
    && game
    && !!gameSelected
    && gameSelected.dom === game.dom
    ? `3px solid rgba(30, 144, 255, 0.4)`
    : 'none';

  const gradient = addEvent
    && game
    && !!gameSelected
    && gameSelected.dom === game.dom
    ? `rgba(255,255,255,0.5)`
    : 'rgba(255,255,255,0)';

  const selectedEvent = () => {
    if (!addEvent || !game) return;
    setWeekSelected(week);
    setGameSelected(game);
  };

  return (
    <div role="button"
      className={cardClass}
      data-testid={`card-${testId}`}
      style={{
        backgroundImage: `linear-gradient(${gradient}, ${gradient}), url(${imgUrl})`,
        borderRight: border
      }}
      onClick={selectedEvent}
    >
      {addEvent &&
        <div className="day-with-game">
          {!!game && game.dom}
        </div>
      }
      {!addEvent &&
        <div className="day-of-month">
          {!!game && game.dom}
        </div>
      }
    </div>
  );
};

export default WeekDay;
