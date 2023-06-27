import React from 'react';
import "./Sidebar.css";
import CreateEventButton from './CreateEventButton';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <CreateEventButton/>
    </aside>
  )
}

export default Sidebar