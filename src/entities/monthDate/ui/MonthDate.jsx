import React from 'react';
import './style.css';

export const MonthDate = ({monthFormat}) => {
  return (
    <p className='month-date'>
        {monthFormat}
      </p>
  )
};