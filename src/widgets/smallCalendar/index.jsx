import dayjs from "dayjs";
import React, { useState, useEffect, useContext } from "react";
import { getMonth } from "../../util";
import "./SmallCalendar.css";
import GlobalContext from "../../context/GlobalContext";
import { MonthDate } from "../../entities/monthDate";
import { MonthButton } from "../../entities/monthButtons";
import { SmallDay } from "../../entities/smallDay";

export const SmallCalendar = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonthIndex(monthIndex);
  }, [monthIndex]);

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);

  return (
    <div className="small-calendar">
      <header className="small-calendar__header">
        <MonthDate monthIdx={currentMonthIndex} />
        <div style={{ display: "flex" }}>
          <MonthButton
            action={"prev"}
            monthState={{
              monthIdx: currentMonthIndex,
              setMonthIdx: setCurrentMonthIndex,
            }}
          />
          <MonthButton
            action={"next"}
            monthState={{
              monthIdx: currentMonthIndex,
              setMonthIdx: setCurrentMonthIndex,
            }}
          />
        </div>
      </header>
      <div className="small-calendar__body">
        {currentMonth[0].map((day, index) => {
          return (
            <div key={index} className="small-calendar__day">
              {day.format("dd")}
            </div>
          );
        })}
        {currentMonth.map((row, index) => {
          return (
            <React.Fragment key={index}>
              {row.map((day, i) => {
                return (
                  <SmallDay
                    key={i}
                    day={day}
                    index={i}
                    currentMonthIndex={currentMonthIndex}
                  />
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
