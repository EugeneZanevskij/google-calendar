import dayjs from 'dayjs';
import React, { useState, useEffect, useContext } from 'react';
import { getMonth } from './util';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "./SmallCalendar.css";
import GlobalContext from './context/GlobalContext';
import { MonthDate, useMonthDate } from './entities/monthDate';
import { MonthButton, useMonthButton } from './features/monthButtons';

const SmallCalendar = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const {monthIndex, setSmallCalendarMonth, daySelected, setDaySelected, setShowEventModal} = useContext(GlobalContext);
  
  useEffect(() => {
    setCurrentMonthIndex(monthIndex);
  }, [monthIndex]);
  // const handlePrevMonth = () => {
  //   setCurrentMonthIndex(currentMonthIndex - 1);
  // };
  // const handleNextMonth = () => {
  //   setCurrentMonthIndex(currentMonthIndex + 1);
  // };

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

  const monthFormat = useMonthDate(currentMonthIndex);
  const [handlePrevMonth, handleNextMonth, ] = useMonthButton(currentMonthIndex, setCurrentMonthIndex);

  return (
    <div className='small-calendar'>
      <header className='small-calendar__header'>
        <MonthDate monthFormat={monthFormat} bool={true}/>
        <div style={{display: 'flex'}}>
          <MonthButton handleClick={handlePrevMonth} children={<ChevronLeftIcon/>}/>
          <MonthButton handleClick={handleNextMonth} children={<ChevronRightIcon/>}/>
        </div>
      </header>
      <div className='small-calendar__body'>
        {currentMonth[0].map((day, index) => {
          return <div key={index} className='small-calendar__day'>
            {day.format('dd')}
          </div>;
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
                      setShowEventModal(true);
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