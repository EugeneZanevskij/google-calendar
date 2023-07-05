import React, { useContext } from 'react';
import './style.css';
import logo from './assets/calendar-image.png';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GlobalContext from '../../../context/GlobalContext';
import dayjs from 'dayjs';
import {MonthButton, useMonthButton} from '../../../features/monthButtons';

export const Header = () => {
  const {monthIndex} = useContext(GlobalContext);

  const [handlePrevMonth, handleNextMonth, handleResetMonth] = useMonthButton();
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt="logo" />
      <h1 className='header__title'>Calendar Clone</h1>
      <MonthButton handleClick={handleResetMonth} children='Today'/>
      <MonthButton handleClick={handlePrevMonth} children={<ChevronLeftIcon />}/>
      <MonthButton handleClick={handleNextMonth} children={<ChevronRightIcon />}/>
      <p className='header__month'>
        {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
      </p>
    </header>
  )
}