import React, { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import './Day.css';
import GlobalContext from './context/GlobalContext';

const Day = ({day, weekday}) => {
  const {setDaySelected, setShowEventModal, calendarEvents} = useContext(GlobalContext);

  const [dayEvents, setDayEvents] = useState([]);
  useEffect(() => {
    const events = calendarEvents.filter((event) => {
      return dayjs(event.day).format('YYYY-MM-DD') === dayjs(day).format('YYYY-MM-DD');
    });
    setDayEvents(events);
  }, [calendarEvents, day]);
  const isCurrentDay = day && day.format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD');

  return (
    <>
      {weekday && <div className='day weekday'>
        <p className='day__weekday'>{weekday}</p>
      </div>}
      {day && <div 
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
        className={`day ${isCurrentDay ? 'day--current' : ''}`}
      >
        <p className='day__date'>{day.format('DD')}</p>
        {dayEvents.map((event, i) => {
          return <p 
            key={i} 
            style={{backgroundColor: event.label}}
            className='day__event'
          >
            {event.title}
          </p>;
        })}
      </div>}
    </>
  )
}

export default Day;
