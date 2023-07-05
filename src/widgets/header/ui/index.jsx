import React, { useContext } from 'react';
import './style.css';
import logo from './assets/calendar-image.png';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GlobalContext from '../../../context/GlobalContext';
import dayjs from 'dayjs';

export const Header = () => {
  const {monthIndex, setMonthIndex} = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleResetMonth() {
    setMonthIndex(
      monthIndex === dayjs().month() 
      ? monthIndex + Math.random() 
      : dayjs().month()
      );
  }
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt="logo" />
      <h1 className='header__title'>Calendar Clone</h1>
      <button onClick={handleResetMonth} className='header__button header__button--today'>
        Today
      </button>
      <button onClick={handlePrevMonth} className='header__button header__button--prev'>
        <ChevronLeftIcon />
      </button>
      <button onClick={handleNextMonth} className='header__button header__button--next'>
        <ChevronRightIcon />
      </button>
      <p className='header__month'>
        {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
      </p>
    </header>
  )
}