import React, { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import './Day.css';
import GlobalContext from './context/GlobalContext';

const Day = ({day, weekday}) => {
  const {setDaySelected, setShowEventModal, filteredEvents, setSelectedEvent} = useContext(GlobalContext);

  const [dayEvents, setDayEvents] = useState([]);
  useEffect(() => {
    const events = filteredEvents.filter((event) => {
      return dayjs(event.day).format('YYYY-MM-DD') === dayjs(day).format('YYYY-MM-DD');
    });
    setDayEvents(events);
  }, [filteredEvents, day]);
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
            onClick={() => {
              setSelectedEvent(event);
            }}
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
