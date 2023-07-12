import React from "react";
import { useSmallDay } from "../model/useSmallDay";
import { Button } from "../../../shared/ui";

export const SmallDay = ({ day, currentMonthIndex }) => {
  const { handleClick, getSmallDayStyle } = useSmallDay(day, currentMonthIndex);
  return (
    <Button
      classStyle={getSmallDayStyle}
      handleClick={handleClick}
      children={day.format("D")}
    />
  );
};
