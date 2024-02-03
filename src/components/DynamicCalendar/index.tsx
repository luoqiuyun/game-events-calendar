import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { DefaultDate } from "components/types";
import EventsCalendar from "components/Calendar";
import usePrevLocation from "./usePrevLocation";
import {
  selectedDate,
  getDefaultDate,
  isValidLocation
} from "components/helpers";

const DynamicCalendar: React.FC = () => {
  const [calendar, setCalenda] = useState<DefaultDate>(getDefaultDate());

  const location = useLocation();
  const prevLocation = usePrevLocation(location);

  useEffect(() => {
    const { pathname } = location;
    if(pathname.length === 1) return;
    if (!isValidLocation(location)) window.history.back();
    setCalenda(selectedDate(location, prevLocation));
  }, []);

  return (
    <EventsCalendar
      calendar={calendar}
      setCalenda={setCalenda}
    />
  );
};

export default DynamicCalendar;
