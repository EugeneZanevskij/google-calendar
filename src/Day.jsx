import React from 'react';
import dayjs from 'dayjs';
import './Day.css';

const Day = ({day, weekday}) => {
  const isCurrentDay = day && day.format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD');

  return (
    <>
      {day && <div className={`day ${isCurrentDay ? 'day--current' : ''}`}>
        <p>{day.format('DD')}</p>
      </div>}
      {weekday && <div className='day'>
        <p>{weekday}</p>
      </div>}
    </>
  )
}

export default Day;
