import React, { useEffect, useMemo, useReducer, useState } from 'react';
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
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [labels, setLabels] = useState([])
  const [calendarEvents, dispatchCalEvents] = useReducer(
    savedEventsReducer, 
    [], 
    initEvents
  );

  const filteredEvents = useMemo(() => {
    return calendarEvents.filter(
      (event) => labels
        .filter(lbl => lbl.checked)
        .map(lbl => lbl.label)
        .includes(event.label)
    );
  }, [calendarEvents, labels]);

  useEffect(() => {
    localStorage.setItem('calendarEvents', JSON.stringify(calendarEvents));
    setLabels(prevLabels => {
      return [...new Set(calendarEvents.map((event) => event.label))].map(
        label => {
          const currentLabel = prevLabels.find(
            lbl => lbl.label === label
          );
          return {
            label,
            checked: currentLabel ? currentLabel.checked : true
          }
      })
    })
  }, [calendarEvents])

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);

  function updateLabel(label) {
    setLabels(
      labels.map(
        (lbl) => (
          lbl.label === label.label ? label : lbl
        )
      )
    )
  }

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
      selectedEvent,
      setSelectedEvent,
      dispatchCalEvents,
      calendarEvents,
      labels,
      setLabels,
      updateLabel,
      filteredEvents
    }}>
      {props.children}
    </GlobalContext.Provider>
  )
}