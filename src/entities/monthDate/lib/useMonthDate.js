import { useContext } from 'react'
import GlobalContext from '../../../context/GlobalContext';
import dayjs from 'dayjs';

export function useMonthFormat (monthIdx) {
  const {monthIndex} = useContext(GlobalContext);
  const index = monthIdx || monthIndex;
  const monthFormat = dayjs(new Date(dayjs().year(), index)).format('MMMM YYYY');
  return monthFormat;
}