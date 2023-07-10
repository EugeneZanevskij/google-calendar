import React from 'react';
import './style.css';

export const SmallDay = ({
  day,
  index,
  handleClick,
  getSmallDayStyle
}) => {
  return (
  <button 
    key={index} 
    onClick={() => handleClick(day)}
    className={getSmallDayStyle(day)}>
    {day.format('D')}
  </button>);
}
