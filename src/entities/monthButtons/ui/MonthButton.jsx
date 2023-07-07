import React from 'react';
import './style.css';

export const MonthButton = ({
    handleClick,
    children
  }) => {
  return (
    <button onClick={handleClick} className={`month-button ${children === 'Today' ? 'month-button--today' : ''}`}>
      {children}
    </button>
  )
};