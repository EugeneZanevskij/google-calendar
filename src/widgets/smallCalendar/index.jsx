import dayjs from 'dayjs';
import React, { useState, useEffect, useContext } from 'react';
import { getMonth } from '../../util';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "./SmallCalendar.css";
import GlobalContext from '../../context/GlobalContext';
import { MonthDate, useMonthFormat } from '../../entities/monthDate';
import { MonthButton, useMonthButton } from '../../entities/monthButtons';
import { SmallDay } from '../../entities/smallDay';

const SmallCalendar = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const {monthIndex} = useContext(GlobalContext);
  
  useEffect(() => {
    setCurrentMonthIndex(monthIndex);
  }, [monthIndex]);

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);

  const monthFormat = useMonthFormat(currentMonthIndex);
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
                return <SmallDay day={day} index={i} currentMonthIndex={currentMonthIndex} />
              })}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  )
}

export default SmallCalendar;