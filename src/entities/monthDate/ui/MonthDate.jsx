import React from "react";
import "./style.css";
import { useMonthFormat } from "../model/useMonthFormat";

export const MonthDate = ({ monthIdx }) => {
  const monthFormat = useMonthFormat(monthIdx);
  return (
    <p
      className="month-date"
      style={
        monthIdx ? { fontSize: "0.875rem", letterSpacing: "0.25px" } : null
      }
    >
      {monthFormat}
    </p>
  );
};
