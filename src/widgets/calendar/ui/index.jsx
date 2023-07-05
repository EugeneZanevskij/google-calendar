import React from 'react';
import Day from '../../../Day';
import './style.css';

export const Calendar = ({month}) => {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return (
    <div className='calendar'>
      {days.map((day, index) => {
        return <Day weekday={day} key={index}/>
      })}
      {month.map((row, index) => {
        return <React.Fragment key={index}>
          {row.map((day, i) => {
            return <Day day={day} key={i} />
          })}
          </React.Fragment>
      })}
    </div>
  )
};