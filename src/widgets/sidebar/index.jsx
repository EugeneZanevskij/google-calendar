import React, { useContext } from 'react';
import "./Sidebar.css";
import CreateEventButton from '../../entities/createEventButton';
import SmallCalendar from '../smallCalendar';
import GlobalContext from '../../context/GlobalContext';
import {LabelsAccordion} from '../labelsAccordion';

const Sidebar = () => {
  const {openSidebar} = useContext(GlobalContext);
  return (
    <aside className={`sidebar ${!openSidebar ? 'sidebar--closed' : ''}`}>
      <CreateEventButton/>
      {openSidebar && 
      <>
        <SmallCalendar/>
        <LabelsAccordion/>
      </>
      }
    </aside>
  )
}

export default Sidebar