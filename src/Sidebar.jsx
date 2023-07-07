import React, { useContext } from 'react';
import "./Sidebar.css";
import CreateEventButton from './entities/createEventButton';
import SmallCalendar from './entities/smallCalendar/SmallCalendar';
import Labels from './entities/labels';
import GlobalContext from './context/GlobalContext';

const Sidebar = () => {
  const {openSidebar} = useContext(GlobalContext);
  return (
    <aside className={`sidebar ${!openSidebar ? 'sidebar--closed' : ''}`}>
      <CreateEventButton/>
      {openSidebar && 
      <>
        <SmallCalendar/>
        <Labels/>
      </>
      }
    </aside>
  )
}

export default Sidebar