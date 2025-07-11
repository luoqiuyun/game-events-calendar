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
  const imgUrl = images.find(element => element.includes(thumb)) || 'none';
  const addEvent = imgUrl !== 'none';
  const selected = addEvent
    && game
    && gameSelected
    && gameSelected.dom === game.dom

  const testId = !!game ? game.dom : '';
  let cardClass = addEvent ? "card game-event" : "card";
  cardClass = !!game && !game.prevMonth ? cardClass:`${cardClass} prev-month`;

  const border = selected
    ? `4px solid rgba(30, 144, 255, 0.3)`
    : 'none';

  const gradient = selected
    ? `rgba(255,255,255,0.3)`
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
        backgroundImage: `linear-gradient(${gradient}, ${gradient}), url(/assets/${imgUrl})`,
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
