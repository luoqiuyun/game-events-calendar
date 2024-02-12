import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './styles.css';
import { prev, next } from "components/helpers";
import { CalendarProps } from "components/types";
import Selector from "components/Selector";
import Weekdays from "components/Weekdays";
import Month from "components/Month";

const Calendar: React.FC<CalendarProps> = ({games, calendar, setCalenda}) => {
  const navigate = useNavigate();

  useEffect(() => {
    const month = calendar.month !== 0
      ? calendar.month
      : 12;
    const queryParam = `/${calendar.year}/${month}`;
    navigate(queryParam, {replace:true});
  }, [calendar, navigate]);

  const nextMonth = () => {
    const nextDate = next(calendar);
    setCalenda(nextDate);
  };

  const prevMonth = () => {
    const prevDate = prev(calendar);
    setCalenda(prevDate);
  };

  return (
    <div className="calendar-container">
      <div className="place-holder" />
      <Selector
        calendar={calendar}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <Weekdays />
      <Month
        games={games}
        calendar={calendar}
      />
    </div>
  );
};

export default Calendar;
