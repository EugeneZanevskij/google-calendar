import React, { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import './Day.css';
import GlobalContext from './context/GlobalContext';

const Day = ({day, weekday}) => {
  const {daySelected, setDaySelected, setShowEventModal, filteredEvents, setSelectedEvent} = useContext(GlobalContext);

  const [dayEvents, setDayEvents] = useState([]);
  useEffect(() => {
    const events = filteredEvents.filter((event) => {
      return dayjs(event.day).format('YYYY-MM-DD') === dayjs(day).format('YYYY-MM-DD');
    });
    setDayEvents(events);
  }, [filteredEvents, day]);
  function getDayClass(day) {
    const format = 'DD/MM/YYYY';
    const today = dayjs().format(format);
    const currentDay = day.format(format);
    const selDay = daySelected && daySelected.format(format);
    if (today === currentDay) {
      return 'day--current';
    } else if (selDay === currentDay) {
      return 'day--selected';
    } else {
      return '';
    }
  }

  return (
    <>
      {weekday && <div className='weekday'>
        <p className='day__weekday'>{weekday}</p>
      </div>}
      {day && <div 
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
        className='day'
      >
        <p className={`day__date ${getDayClass(day)}`}>
          {day.format('D')}
        </p>
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
