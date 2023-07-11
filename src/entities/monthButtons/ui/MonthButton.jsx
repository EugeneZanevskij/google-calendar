import React from 'react';
import './style.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button } from '../../../shared/ui';
import { useMonthButton } from '../model/useMonthButton';

export const MonthButton = ({
    action,
    monthState
  }) => {
    if (monthState) {
      var {monthIdx, setMonthIdx} = monthState;
    }
    const {handlePrevMonth, handleNextMonth, handleResetMonth} = useMonthButton(monthIdx, setMonthIdx);
    let handleClick, children;
    switch (action) {
      case 'prev':
        handleClick=handlePrevMonth;
        children=<ChevronLeftIcon />;
        break;
      case 'next':
        handleClick=handleNextMonth;
        children=<ChevronRightIcon />;
        break;
      default:
        handleClick=handleResetMonth;
        children='Today';
        break;
    }
  return (
    <Button 
      classStyle={`month-button ${children === 'Today' ? 'month-button--today' : ''}`}
      handleClick={handleClick} 
      children={children}
    />
  )
};