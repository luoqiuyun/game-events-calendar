import React, { useState, useEffect} from 'react';
import './styles.css';
import { getWeekDays } from "components/helpers";

const Weekdays: React.FC = () => {
  
  const [width, setWidth] = useState<number>(window.innerWidth);
  const isMobile = width <= 768;
  const windowResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', windowResize);
    return () => window.removeEventListener('resize', windowResize);
  }, []);

  return (
    <div className="weekday-container">
      {getWeekDays().map((weekday, i) => 
        <div key={`weekday-${i}`} className="week-day">
          {!isMobile ? weekday : weekday.substr(0, 2)}
        </div>
      )}
    </div>
  );
};

export default Weekdays;
