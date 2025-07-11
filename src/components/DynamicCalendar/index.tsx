import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Game } from "components/types";
import { DefaultDate } from "components/types";
import EventsCalendar from "components/Calendar";
import usePrevLocation from "./usePrevLocation";
import {
  selectedDate,
  getDefaultDate,
  isValidLocation
} from "components/helpers";

const DynamicCalendar: React.FC = () => {

  const [updated, setUpdated] = useState<boolean>(false);
  const [games, setGames] = useState<Game[]>([]);
  const [calendar, setCalenda] = useState<DefaultDate>(getDefaultDate());
  const location = useLocation();
  const prevLocation = usePrevLocation(location);

  useEffect(() => {
    const { pathname } = location;
    if(pathname.length === 1) return;
    if (!isValidLocation(location)
      && !isValidLocation(prevLocation))
      window.history.back();
    setCalenda(selectedDate(location, prevLocation));
  }, []);

  useEffect(() => {
    if(updated && !!games.length) return;
    fetch('/api/games')
    .then(response => {
      if (response.ok) return response.json();
      return Promise.reject(response);
    })
    .then(data => setGames(data))
    .catch((response) => {});
  }, [games, updated]);

  useEffect(() => {
    if(!games.length) return;
    setUpdated(true);
  }, [games]);
  
  return (
    <>
      {updated &&
        <EventsCalendar
          games={games}
          calendar={calendar}
          setCalenda={setCalenda}
        />
      }
    </>
  );
};

export default DynamicCalendar;
