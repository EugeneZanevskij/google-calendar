import React, { useContext, useEffect, useState } from 'react';
import { getMonth } from '../../util';
import {Header} from '../../widgets/header';
import {Calendar} from '../../entities/calendar';
import Sidebar from '../../widgets/sidebar';
import GlobalContext from '../../context/GlobalContext';
import EventModalForm from '../../features/eventModalForm';
import EventModalDisplay from '../../features/eventModalDisplay';

export const Home = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const {monthIndex, showEventModal, displayEvent} = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <>
      {showEventModal && <EventModalForm/>}
      {displayEvent && <EventModalDisplay/>}
      <Header/>
      <main className="main">
        <Sidebar/>
        <Calendar month={currentMonth}/>
      </main>
    </>
  );
};