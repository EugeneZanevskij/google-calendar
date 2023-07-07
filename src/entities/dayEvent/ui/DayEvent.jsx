import React from 'react';
import './style.css';

export const DayEvent = ({
  index,
  event,
  handleClick,
  dayEventStyle
}) => {
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