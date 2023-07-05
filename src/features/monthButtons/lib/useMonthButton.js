import { useContext } from 'react';
import GlobalContext from '../../../context/GlobalContext';
import dayjs from 'dayjs';

export const useMonthButton = () => {
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
  return [handlePrevMonth, handleNextMonth, handleResetMonth];
}