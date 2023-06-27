import React, { useState } from 'react';
import './App.css';
import Header from './Header';

function App() {
  const [events, setEvents] = useState([]);

  const handleAddEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div className="App">
      <Header/>
      <div className="calendar">
        {/* Add your calendar components here */}
      </div>
    </div>
  );
}

export default App;
