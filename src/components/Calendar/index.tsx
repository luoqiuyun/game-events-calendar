import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { prev, next } from "components/helpers";
import { DefaultDate } from "components/types";
import Selector from "components/Selector";
import Weekdays from "components/Weekdays";
import Month from "components/Month";

type CalendarProps = {
  calendar: DefaultDate;
  setCalenda: Function;
};

const Calendar: React.FC<CalendarProps> = ({calendar, setCalenda}) => {
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
  }

  const prevMonth = () => {
    const prevDate = prev(calendar);
    setCalenda(prevDate);
  }

  return (
    <div className="calendar-container">
      <Selector
        calendar={calendar}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <hr />
      <Weekdays />
      <Month
        calendar={calendar}
      />
    </div>
  );
};

export default Calendar;
