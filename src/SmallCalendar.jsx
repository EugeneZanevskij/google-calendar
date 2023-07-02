import dayjs from 'dayjs';
import React, { useState, useEffect, useContext } from 'react';
import { getMonth } from './util';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "./SmallCalendar.css";
import GlobalContext from './context/GlobalContext';

const SmallCalendar = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const {monthIndex, setSmallCalendarMonth, daySelected, setDaySelected} = useContext(GlobalContext);
  
  useEffect(() => {
    setCurrentMonthIndex(monthIndex);
  }, [monthIndex]);
  const handlePrevMonth = () => {
    setCurrentMonthIndex(currentMonthIndex - 1);
  };
  const handleNextMonth = () => {
    setCurrentMonthIndex(currentMonthIndex + 1);
  };

  function getDayClass(day) {
    const format = 'DD/MM/YYYY';
    const today = dayjs().format(format);
    const currentDay = day.format(format);
    const selDay = daySelected && daySelected.format(format);
    if (today === currentDay) {
      return 'small-calendar__day-button--current';
    } else if (selDay === currentDay) {
      return 'small-calendar__day-button--selected';
    } else {
      return '';
    }
  }
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);


  return (
    <div className='small-calendar'>
      <header className='small-calendar__header'>
        <h2>
          {dayjs(new Date(dayjs().year(), currentMonthIndex)).format('MMMM YYYY')}
        </h2>
        <button onClick={handlePrevMonth} className='header__button'>
          <ChevronLeftIcon />
        </button>
        <button onClick={handleNextMonth} className='header__button'>
          <ChevronRightIcon />
        </button>
      </header>
      <div className='small-calendar__body'>
        {currentMonth[0].map((day, index) => {
          return <span key={index} className='small-calendar__day'>
            {day.format('dd').charAt(0)}
          </span>;
        })}
        {currentMonth.map((row, index) => {
          return (
            <React.Fragment key={index}>
              {row.map((day, i) => {
                return <button 
                    key={i} 
                    onClick={() => {
                      setSmallCalendarMonth(currentMonthIndex);
                      setDaySelected(day);
                    }}
                    className={`small-calendar__day-button ${getDayClass(day)}`}>
                  {day.format('D')}
                </button>;
              })}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  )
}

export default SmallCalendar;