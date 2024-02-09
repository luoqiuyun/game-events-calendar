import React from 'react';
import './styles.css';
import { WeekProps } from "components/types";
import WeekDay from "components/WeekDay";

const Week: React.FC<WeekProps> = ({
  week,
  days,
  images,
  gameSelected,
  setWeekSelected,
  setGameSelected
}) => {

  return (
    <div className="card-container" data-testid="week">
      {days.map((game, i) => 
        <WeekDay
          key={`weekday-${i}`}
          game={game}
          images={images}
          week={week}
          gameSelected={gameSelected}
          setWeekSelected={setWeekSelected}
          setGameSelected={setGameSelected}
        />
      )}
    </div>
  );
};

export default Week;
