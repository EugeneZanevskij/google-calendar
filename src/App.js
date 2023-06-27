import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Calendar from './Calendar';
import { getMonth } from './util';

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());

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
