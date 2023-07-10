import React from 'react';
import './style.css';

/**
 * Renders the MonthDate component.
 *
 * @param {string} monthFormat - The formatted month.
 * @param {bool} bool - A boolean value to determine whether to apply the style.
 * @return {JSX.Element} The rendered component.
 */
export const MonthDate = ({monthFormat, bool}) => {
  return (
    <p className='month-date' style={bool ? {fontSize: '0.875rem', letterSpacing: '0.25px'} : null}>
      {monthFormat}
    </p>
  )
};