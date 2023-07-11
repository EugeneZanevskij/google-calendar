import { useContext } from 'react'
import GlobalContext from '../../../context/GlobalContext';
import dayjs from 'dayjs';

export const useDayEvent = (day) => {
  const { setDaySelected, setSelectedEvent, setDisplayEvent} = useContext(GlobalContext);
  function handleClick(event) {
    setDaySelected(day);
    setSelectedEvent(event);
    setDisplayEvent(true);
  };
  const dayEventStyle = `day__event ${ day.date() < dayjs().date() ? 'day__event--prev' : ''}`;
  return ({
    handleClick,
    dayEventStyle
  }
  )
}