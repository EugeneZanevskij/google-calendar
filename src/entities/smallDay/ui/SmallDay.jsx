import React from 'react';
import './style.css';
import { useSmallDay } from '../model/useSmallDay';

export const SmallDay = ({
  day,
  index,
  currentMonthIndex
}) => {
  const {handleClick, getSmallDayStyle} = useSmallDay({currentMonthIndex});
  return (
  <button 
    key={index} 
    onClick={() => handleClick(day)}
    className={getSmallDayStyle(day)}>
    {day.format('D')}
  </button>);
}
