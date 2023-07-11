import React from 'react';
import './style.css';
import { useDayEvent } from '../model/useDayEvent';

export const DayEvent = ({
  index,
  event,
  day
}) => {
  const {handleClick, dayEventStyle} = useDayEvent({day});
  return (
    <p key={index}
      onClick={(e) => {
        e.stopPropagation();
        handleClick(event);
      }}
      style={{backgroundColor: event.label}}
      className={dayEventStyle}
    >
      {/* <div className='day__event-icon' style={{borderColor: event.label}}></div> */}
      {event.title}
    </p>
  )
};