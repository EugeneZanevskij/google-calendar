import React from 'react';
import "./Sidebar.css";
import CreateEventButton from './CreateEventButton';
import SmallCalendar from './SmallCalendar';
import Labels from './entities/labels';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <CreateEventButton/>
      <SmallCalendar/>
      <Labels/>
    </aside>
  )
}

export default Sidebar