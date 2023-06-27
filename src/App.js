import React, { useState, useContext, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Calendar from './Calendar';
import { getMonth } from './util';
import GlobalContext from './context/GlobalContext';
import EventModal from './EventModal';

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const {monthIndex, showEventModal} = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <>
      {showEventModal && <EventModal/>}
      <Header/>
      <main className="container">
        <Sidebar/>
        <Calendar month={currentMonth}/>
        {/* Add your calendar components here */}
      </main>
    </>
  );
}

export default App;
