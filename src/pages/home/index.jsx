import React, { useContext, useEffect, useState } from 'react';
import { getMonth } from '../../util';
import {Header} from '../../widgets/header';
import {Calendar} from '../../widgets/calendar';
import Sidebar from '../../Sidebar';
import GlobalContext from '../../context/GlobalContext';
import EventModalForm from '../../EventModalForm';
import EventModalDisplay from '../../EventModalDisplay';

export const Home = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const {monthIndex, openSidebar, showEventModal, displayEvent} = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <>
      {showEventModal && <EventModalForm/>}
      {displayEvent && <EventModalDisplay/>}
      <Header/>
      <main className="main">
        {openSidebar && <Sidebar/>}
        <Calendar month={currentMonth}/>
      </main>
    </>
  );
};