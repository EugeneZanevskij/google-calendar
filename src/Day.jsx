import React, { useContext } from 'react';
import dayjs from 'dayjs';
import './Day.css';
import GlobalContext from './context/GlobalContext';

const Day = ({day, weekday}) => {
  const {setDaySelected, setShowEventModal} = useContext(GlobalContext);
  const isCurrentDay = day && day.format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD');

  return (
    <>
      {day && <div 
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
        className={`day ${isCurrentDay ? 'day--current' : ''}`}
      >
        <p>{day.format('DD')}</p>
      </div>}
      {weekday && <div className='day'>
        <p>{weekday}</p>
      </div>}
    </>
  )
}

export default Day;
