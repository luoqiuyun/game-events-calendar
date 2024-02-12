import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from "react-router-dom";
import { getCalendar, getImageList } from "components/helpers";
import { Game, MonthProps } from "components/types";
import SelectedGame from "components/SelectedGame";
import Week from "components/Week";

const Month: React.FC<MonthProps> = ({ calendar }) => {
  
  const [weekSelected, setWeekSelected] = useState<number | null>(null);
  const [gameSelected, setGameSelected] = useState<Game | null>(null);
  const [games, setGames] = useState<Game[]>([]);
  const location = useLocation();

  useEffect(() => {
    fetch('/api/games')
    .then(response => {
      if (response.ok) return response.json();
      return Promise.reject(response);
    })
    .then(data => setGames(data))
    .catch((response) => {});
  }, []);

  useEffect(() => {
    setWeekSelected(null);
    setGameSelected(null);
  }, [calendar]);

  const selectedCalendar = useMemo(() => 
    getCalendar(
      calendar,
      games,
      location
  ), [ calendar, games, location ]);

  return (
    <div className="month-container">
      {selectedCalendar.map((week, i) =>
        <React.Fragment key={`week-${i}`}>
          <Week
            week={i}
            days={week}
            images={getImageList()}
            gameSelected={gameSelected}
            setWeekSelected={setWeekSelected}
            setGameSelected={setGameSelected}
          />
          {weekSelected === i
            && gameSelected
            && <SelectedGame game={gameSelected} images={getImageList()} />
          }
        </React.Fragment>
      )}
    </div>
  );
};

export default Month;
