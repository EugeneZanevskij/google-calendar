import { useContext } from "react";
import GlobalContext from "../../../context/GlobalContext";
import dayjs from "dayjs";

export const useMonthButton = (monthIdx, setMonthIdx) => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  const index = monthIdx || monthIndex;
  const setIndex = setMonthIdx || setMonthIndex;
  function handlePrevMonth() {
    setIndex(index - 1);
  }
  function handleNextMonth() {
    setIndex(index + 1);
  }
  function handleResetMonth() {
    setIndex(
      index === dayjs().month() ? index + Math.random() : dayjs().month()
    );
  }
  return { handlePrevMonth, handleNextMonth, handleResetMonth };
};
