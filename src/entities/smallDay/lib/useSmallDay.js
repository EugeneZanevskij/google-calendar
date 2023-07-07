import { useContext } from 'react'
import GlobalContext from '../../../context/GlobalContext';
import dayjs from 'dayjs';

export const useSmallDay = ({currentMonthIndex}) => {
  const {setSmallCalendarMonth, daySelected, setDaySelected, setShowEventModal} = useContext(GlobalContext);
  function handleClick(day) {
    setSmallCalendarMonth(currentMonthIndex);
    setDaySelected(day);
    setShowEventModal(true);
  }
  function getDayClass(day) {
    const format = 'DD/MM/YYYY';
    const today = dayjs().format(format);
    const currentDay = day.format(format);
    const selDay = daySelected && daySelected.format(format);
    if (today === currentDay) {
      return 'small-calendar__day-button--current';
    } else if (selDay === currentDay) {
      return 'small-calendar__day-button--selected';
    } else {
      return '';
    }
  }
  const getSmallDayStyle = (day) => `small-calendar__day-button ${getDayClass(day)} ${day.month() === currentMonthIndex ? '' : 'small-calendar__day-button--other'}`;
  return ({
    handleClick,
    getSmallDayStyle
  })
}
