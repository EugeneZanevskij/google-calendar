import React from 'react';
import {Day} from '../../day';
import './style.css';

export const Calendar = ({month}) => {
  return (
    <div className='calendar'>
      {month.map((row, index) => {
        return <React.Fragment key={index}>
          {row.map((day, i) => {
            return (<Day day={day} index={index} key={i} />)
          })}
          </React.Fragment>
      })}
    </div>
  )
};