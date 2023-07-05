import React, { useContext, useEffect, useState } from 'react';
import { getMonth } from '../../util';
import EventModal from '../../EventModal';
import {Header} from '../../widgets/header';
import {Calendar} from '../../widgets/calendar';
import Sidebar from '../../Sidebar';
import GlobalContext from '../../context/GlobalContext';

export const Home = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const {monthIndex, showEventModal} = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <>
      {showEventModal && <EventModal/>}
      <Header/>
      <main className="main">
        <Sidebar/>
        <Calendar month={currentMonth}/>
      </main>
    </>
  );
};