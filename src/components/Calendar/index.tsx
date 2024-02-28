import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './styles.css';
import { CalendarProps } from "components/types";
import { prev, next, getImageList } from "components/helpers";
import Selector from "components/Selector";
import Weekdays from "components/Weekdays";
import Month from "components/Month";
import DetailsFullImages from "./DetailsFullImages";

const Calendar: React.FC<CalendarProps> = ({
  games,
  calendar,
  setCalenda
}) => {

  const images = getImageList();
  const navigate = useNavigate();

  useEffect(() => {
    const { month, year } = calendar
    const queryParam = `/${year}/${month !== 0 ? month : 12}`;
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
      <DetailsFullImages images={images} />
    </div>
  );
};

export default Calendar;
