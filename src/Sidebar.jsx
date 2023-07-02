import React from 'react';
import "./Sidebar.css";
import CreateEventButton from './CreateEventButton';
import SmallCalendar from './SmallCalendar';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <CreateEventButton/>
      <SmallCalendar/>
    </aside>
  )
}

export default Sidebar