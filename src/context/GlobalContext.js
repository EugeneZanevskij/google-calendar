import React from 'react';

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  openSidebar: true,
  setOpenSidebar: () => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},
  daySelected: null,
  setDaySelected: (day) => {},
  displayEvent: false,
  setDisplayEvent: () => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCalEvents: ({type, payload}) => {},
  calendarEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
  labels: [],
  setLabels: () => {},
  updateLabel: () => {},
  filteredEvents: []
});

export default GlobalContext;