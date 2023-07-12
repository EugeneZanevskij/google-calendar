import React from "react";
import dayjs from "dayjs";
import "./Day.css";
import { useDay } from "../model/useDay";
import { DayEvent } from "../../dayEvent";

export const Day = ({ day, index }) => {
  const { dayEvents, handleDayClick, getDayClass, getMonthName } = useDay(day);

  return (
    <>
      {day && (
        <div onClick={handleDayClick} className="day">
          <div className="day__container">
            {index === 0 && <p className="day__weekday">{day.format("dd")}</p>}
            <p
              className={`day__date ${getDayClass()} ${
                day < dayjs() ? "day__date--prev" : ""
              }`}
            >
              {`${day.format("D")} ${getMonthName}`}
            </p>
          </div>
          {dayEvents.map((event, i) => {
            return <DayEvent key={i} event={event} day={day} />;
          })}
        </div>
      )}
    </>
  );
};
