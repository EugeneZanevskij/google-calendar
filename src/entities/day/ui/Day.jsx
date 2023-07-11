import React, { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import './Day.css';
import { DayEvent } from '../../dayEvent';
import GlobalContext from '../../../context/GlobalContext';

export const Day = ({day, index}) => {
  const {daySelected, setDaySelected, setShowEventModal, filteredEvents} = useContext(GlobalContext);
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

  function getMonthName(day) {
    if (day.date() === 1) return day.format('MMM');
    return '';
  }

  return (
    <>
      {day && <div 
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
        className='day'
      >
        <div className='day__container'>
          {index === 0 && 
            <p className='day__weekday'>
            {day.format('dd')}
          </p>}
          <p className={`day__date ${getDayClass(day)} ${ day < dayjs() ? 'day__date--prev' : ''}`}>
            {`${day.format('D')} ${getMonthName(day)}`}
          </p>
        </div>
        {dayEvents.map((event, i) => {
          return (<DayEvent key={i} event={event} day={day} />);
        })}
      </div>}
    </>
  )
}