import React, { useState, useContext, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Calendar from './Calendar';
import { getMonth } from './util';
import GlobalContext from './context/GlobalContext';

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const {monthIndex} = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <>
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
