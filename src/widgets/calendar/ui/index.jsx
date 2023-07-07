import React from 'react';
import {Day} from '../../../features/day';
import './style.css';

export const Calendar = ({month}) => {
  return (
    <div className='calendar'>
      {month.map((row, index) => {
        console.log(row, index);
        return <React.Fragment key={index}>
          {row.map((day, i) => {
            return (<Day day={day} index={index} key={i} />)
          })}
          </React.Fragment>
      })}
    </div>
  )
};