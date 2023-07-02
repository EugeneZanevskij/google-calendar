import React, { useEffect, useReducer, useState } from 'react';
import GlobalContext from './GlobalContext';
import dayjs from 'dayjs';

function savedEventsReducer(state, {type, payload}) {
  switch (type) {
    case 'push':
      return [...state, payload];
    case 'update':
      return state.map((event) => event.id === payload.id ? payload : event);
    case 'delete':
      return state.filter((event) => event.id !== payload.id);
    default:
      throw new Error();
  }
}

function initEvents() {
  const calendarEvents = localStorage.getItem('calendarEvents');
  return calendarEvents ? JSON.parse(calendarEvents) : [];
}

export default function ContextProvider(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month()); 
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null); 
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [calendarEvents, dispatchCalEvents] = useReducer(
    savedEventsReducer, 
    [], 
    initEvents
  );

  useEffect(() => {
    localStorage.setItem('calendarEvents', JSON.stringify(calendarEvents));
  }, [calendarEvents])

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  return (
    <GlobalContext.Provider value={{
      monthIndex,
      setMonthIndex,
      smallCalendarMonth,
      setSmallCalendarMonth,
      daySelected,
      setDaySelected,
      showEventModal,
      setShowEventModal,
      dispatchCalEvents
    }}>
      {props.children}
    </GlobalContext.Provider>
  )
}