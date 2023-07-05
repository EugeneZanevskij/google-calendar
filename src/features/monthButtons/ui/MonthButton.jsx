import React from 'react';
import './style.css';

export const MonthButton = ({
    handleClick,
    children
  }) => {
  return (
    <button onClick={handleClick} className={`header__month-button ${children === 'Today' ? 'header__month-button--today' : ''}`}>
      {children}
    </button>
  )
};