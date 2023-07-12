import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../../context/GlobalContext";
import dayjs from "dayjs";

export const useDay = (day) => {
  const { daySelected, setDaySelected, setShowEventModal, filteredEvents } =
    useContext(GlobalContext);
  const [dayEvents, setDayEvents] = useState([]);
  useEffect(() => {
    const events = filteredEvents.filter((event) => {
      return (
        dayjs(event.day).format("YYYY-MM-DD") ===
        dayjs(day).format("YYYY-MM-DD")
      );
    });
    setDayEvents(events);
  }, [filteredEvents, day]);

  function handleDayClick() {
    setDaySelected(day);
    setShowEventModal(true);
  }
  function getDayClass() {
    const format = "DD/MM/YYYY";
    const today = dayjs().format(format);
    const currentDay = day.format(format);
    const selDay = daySelected && daySelected.format(format);
    if (today === currentDay) {
      return "day--current";
    } else if (selDay === currentDay) {
      return "day--selected";
    } else {
      return "";
    }
  }

  const getMonthName = day.date() === 1 ? day.format("MMM") : "";
  return {
    dayEvents,
    handleDayClick,
    getDayClass,
    getMonthName,
  };
};
