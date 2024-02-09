import React from 'react';
import './styles.css';
import { getMonthNames } from "components/helpers";
import { SelectorProps } from "components/types";

const Selector: React.FC<SelectorProps> = ({
  calendar,
  prevMonth,
  nextMonth
}) => {

  const month = calendar.month !== 0
    ? calendar.month
    : 12;

  return (
    <div className="selector-container">
      <div className="prev" onClick={() => prevMonth()}>&#8249;</div>
      <div className="year-month">{getMonthNames()[month] + ' ' + calendar.year}</div>
      <div className="next" onClick={() => nextMonth()}>&#8250;</div>
    </div>
  );
};

export default Selector;
