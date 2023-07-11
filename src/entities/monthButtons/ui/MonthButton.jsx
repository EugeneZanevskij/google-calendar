import React from 'react';
import './style.css';
import { Button } from '../../../shared/ui';

export const MonthButton = ({
    handleClick,
    children
  }) => {
  return (
    <Button 
      classStyle={`month-button ${children === 'Today' ? 'month-button--today' : ''}`}
      handleClick={handleClick} 
      children={1}
    />
  )
};