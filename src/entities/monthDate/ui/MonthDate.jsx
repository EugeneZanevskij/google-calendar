import React from 'react';
import './style.css';
import { useMonthFormat } from '../model/useMonthFormat';

/**
 * Renders the MonthDate component.
 *
 * @param {string} monthFormat - The formatted month.
 * @param {bool} bool - A boolean value to determine whether to apply the style.
 * @return {JSX.Element} The rendered component.
 */
export const MonthDate = ({monthIdx}) => {
  const monthFormat = useMonthFormat(monthIdx);
  return (
    <p className='month-date' style={monthIdx ? {fontSize: '0.875rem', letterSpacing: '0.25px'} : null}>
      {monthFormat}
    </p>
  )
};