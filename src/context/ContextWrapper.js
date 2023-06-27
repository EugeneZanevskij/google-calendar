import React from 'react';
import GlobalContext from './GlobalContext';
import dayjs from 'dayjs';

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = React.useState(dayjs().month());
  return (
    <GlobalContext.Provider value={{monthIndex, setMonthIndex}}>
      {props.children}
    </GlobalContext.Provider>
  )
}