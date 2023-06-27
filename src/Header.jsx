import React from 'react';
import './Header.css';
import logo from './assets/calendar-image.png';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Header = () => {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt="logo" />
      <h1 className='header__title'>Google Calendar Clone</h1>
      <button className='header__button'>
        Today
      </button>
      <button className='header__button'>
        <ChevronLeftIcon />
      </button>
      <button className='header__button'>
        <ChevronRightIcon />
      </button>
    </header>
  )
}

export default Header;