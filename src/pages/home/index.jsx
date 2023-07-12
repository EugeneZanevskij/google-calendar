import React, { useContext, useEffect, useState } from "react";
import { getMonth } from "../../util";
import { EventModalDisplay } from "../../entities/eventModalDisplay";
import { EventModalForm } from "../../features/eventModalForm";
import { Header } from "../../widgets/header";
import { Sidebar } from "../../widgets/sidebar";
import { Calendar } from "../../widgets/calendar";
import GlobalContext from "../../context/GlobalContext";

export const Home = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal, displayEvent } =
    useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <>
      {showEventModal && <EventModalForm />}
      {displayEvent && <EventModalDisplay />}
      <Header />
      <main className="main">
        <Sidebar />
        <Calendar month={currentMonth} />
      </main>
    </>
  );
};
