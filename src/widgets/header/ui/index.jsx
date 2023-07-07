import React from 'react';
import './style.css';
import logo from './assets/calendar-image.png';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import {MonthButton, useMonthButton} from '../../../features/monthButtons';
import { MonthDate, useMonthDate } from '../../../entities/monthDate';

export const Header = () => {
  const [handlePrevMonth, handleNextMonth, handleResetMonth] = useMonthButton();
  const monthFormat = useMonthDate();
  return (
    <header className='header'>
      <MenuIcon className='header__menu' style={{fontSize: '2.25rem'}}/>
      <img className='header__logo' src={logo} alt="logo" />
      <h1 className='header__title'>Calendar Clone</h1>
      <MonthButton handleClick={handleResetMonth} children='Today'/>
      <div style={{display: 'flex'}}>
        <MonthButton handleClick={handlePrevMonth} children={<ChevronLeftIcon />}/>
        <MonthButton handleClick={handleNextMonth} children={<ChevronRightIcon />}/>
      </div>
      <MonthDate monthFormat={monthFormat}/>
    </header>
  )
}