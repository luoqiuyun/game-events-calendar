function nthNumber(dayOfMonth) {
  if (dayOfMonth > 3 && dayOfMonth < 21) return "th";
  switch (dayOfMonth % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

function getMonthNames() {
  return [
    "none",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
}

function getWeekDays() {
  return [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
}

function getImageList() {
  const imageList = [
    "fall-guys__16x9.webp",
    "fall-guys__1x1.webp",
    "final-fantasy-xvi__16x9.jpeg",
    "final-fantasy-xvi__1x1.webp",
    "gran-turismo-7__16x9.webp",
    "gran-turismo-7__1x1.webp",
    "hogwarts-legacy__16x9.webp",
    "hogwarts-legacy__1x1.webp",
    "hotline-miami__16x9.webp",
    "hotline-miami__1x1.webp",
    "megaman-11__16x9.webp",
    "megaman-11__1x1.webp",
    "metal-gear-solid__16x9.webp",
    "metal-gear-solid__1x1.jpeg",
    "resident-evil-4__16x9.webp",
    "resident-evil-4__1x1.webp",
    "spiderman-2__16x9.webp",
    "spiderman-2__1x1.webp"
  ];

  return imageList;
}

function descFormat(game) {
  let title: string;
  if (game.title.indexOf(':') > -1) {
    const titleSegments = game.title.split(':');
    title = titleSegments[0].toUpperCase() + ': ' + titleSegments[1];
  } else {
    title = game.title.toUpperCase();
  }
  return title;
}

function descResponsive (isMobile) {
  return {
    width: !isMobile ? '35%' : '75%',
    minWidth: !isMobile ? '520px' : '290px',
    fontSize: !isMobile ? '14px' : '12px',
  }
}

function removeTags(str) {
    if ((str === null) || (str === ''))
        return '';
    else
        str = str.toString();
 
    // Regular expression to identify HTML tags in string.
    // Replacing the identified HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/ig, '');
}

function isValidYear(year) {
  const parsedYear = parseInt(year, 10);
  const currentYear = new Date().getFullYear();
  const parsedCurrent = parseInt(currentYear, 10);
  return !isNaN(parsedYear) 
    && parsedYear >= (parsedCurrent - 5)
    && parsedYear <= (parsedCurrent + 5);
}

function isValidMonth(month) {
  const parsedMonth = parseInt(month, 10);
  return !isNaN(parsedMonth)
    && parsedMonth >= 1
    && parsedMonth <= 12;
}

const isValidPathName = (pathname) => {
  if(pathname.length < 7) return false;
  const params = pathname.split('/');
  if (params.length !== 3) return false;
  const year = parseInt(params[1]);
  const month = parseInt(params[2]);
  if (!isValidYear(year)) return false;
  if (!isValidMonth(month)) return false;
  return true;
};

const isValidLocation = (location) => {
  const { pathname } = location;
  return isValidPathName(pathname);
};

const daysInMonth = (year, month) => {
  const monthSanitized = month !== 12 ? month : 0;
  return new Date(year, monthSanitized, 0).getDate();
};

const firstDayInMonth = (year, month) => {
  const monthSanitized = month !== 0 ? month : 12;
  const firstDay = new Date(`${year}-${monthSanitized}-1`).getDay();
  return firstDay;
};

const getYearMonth = (location) => {
  const { pathname } = location;
  const params = pathname.split('/');
  let year = parseInt(params[1]);
  let month = parseInt(params[2]);
  return { year, month };
};

const getDefaultDate = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const days = daysInMonth(year, month);
  const firstDay = firstDayInMonth(year, month);
  return {
    days: parseInt(days),
    firstDay: parseInt(firstDay),
    month: parseInt(month),
    year: parseInt(year)
  };
};

const getPathDate = (location) => {
  let { year, month } = getYearMonth(location);
  if(!year || !month) return getDefaultDate();
  const days = daysInMonth(year, month);
  const firstDay = firstDayInMonth(year, month);
  const parsedMonth = parseInt(month);
  return {
    days: parseInt(days),
    firstDay: parseInt(firstDay),
    month: parsedMonth !== 12 ? parsedMonth : 0,
    year: parseInt(year)
  };
};

const dateAvailable = (day) => {
  const { pathname } = window.location;
  const params = pathname.split('/');
  const year = params[1];
  const month = parseInt(params[2]);
  const months = getMonthNames();
  return `${months[month]} ${day}${nthNumber(day)}, ${year}`;
};

function selectedDate(location, prevLocation) {
  const { pathname } = location;
  const { pathname: prevPathname } = prevLocation;
  const isValidPath = isValidPathName(pathname);
  const isValidPrevPath = isValidPathName(prevPathname);
  if (!isValidPath && !isValidPrevPath) window.history.back();
  return getPathDate(!isValidPath ? prevLocation : location);
};

const next = (calendar) => {
  let year = calendar.year;
  let month = calendar.month;
  year = month !== 0 ? year : year + 1;
  month = month === 11 ? 0 : month + 1;
  const days = daysInMonth(year, month);
  const firstDay = firstDayInMonth(year, month);
  return { days, firstDay, month, year };
}

const prev = (calendar) => {
  let year = calendar.year;
  let month = calendar.month;
  year = month !== 1 ? year : year - 1;
  month = month === 0 ? 11 : month - 1;
  const days = daysInMonth(year, month);
  const firstDay = firstDayInMonth(year, month);
  return { days, firstDay, month, year };
}

const getPrecedentMonthDays = (location) => {
  let { year, month } = getPathDate(location);
  month -= 1;
  year = month !== 1 ? year : year - 1;
  return daysInMonth(year, month);
};

const addEvent = (day, events) => {
  const addEvent = Math.random() > 0.7;
  const eventIdx = Math.floor(Math.random() * events.length);
  let event = {"dom": day, prevMonth: false};
  if (!!addEvent) {
    return {...events[eventIdx], ...event};
  }
  return event; 
}

const precedentMonth = (calendar, location) => {
  const daysInPrevMonth = getPrecedentMonthDays(location);
  const firstWeek = [];
  for(let i = 0; i < calendar.firstDay; i++) {
    const dayofMonth = {"dom": daysInPrevMonth - i, prevMonth: true};
    firstWeek.unshift(dayofMonth);
  }
  return firstWeek;
}

const getCalendar = (calendar, events, location) => {
  const calendarData = [];
  let oneWeek = [];
  oneWeek = [...oneWeek, ...precedentMonth(calendar, location)];
  for(let i = 1; i <= calendar.days; i++) {
    oneWeek.push(addEvent(i, events));
    const total = i + calendar.firstDay;
    if (!(total % 7)) {
      calendarData.push(oneWeek);
      oneWeek = [];
    }
  }
  if (!!oneWeek.length) calendarData.push(oneWeek);
  return calendarData;
};

export {
  prev,
  next,
  isValidYear,
  isValidMonth,
  isValidLocation,
  getDefaultDate,
  getPathDate,
  firstDayInMonth,
  getCalendar,
  getImageList,
  selectedDate,
  daysInMonth,
  nthNumber,
  getMonthNames,
  removeTags,
  isValidPathName,
  getYearMonth,
  precedentMonth,
  getPrecedentMonthDays,
  addEvent,
  getWeekDays,
  dateAvailable,
  descFormat,
  descResponsive
};
