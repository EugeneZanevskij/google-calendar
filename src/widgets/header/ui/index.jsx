import React, { useContext } from "react";
import "./style.css";
import logo from "./assets/calendar-image.png";
import MenuIcon from "@mui/icons-material/Menu";
import { MonthButton } from "../../../entities/monthButtons";
import { MonthDate } from "../../../entities/monthDate";
import GlobalContext from "../../../context/GlobalContext";

export const Header = () => {
  const { openSidebar, setOpenSidebar } = useContext(GlobalContext);
  return (
    <header className="header">
      <MenuIcon
        className="header__menu"
        style={{ fontSize: "2.25rem" }}
        onClick={() => setOpenSidebar(!openSidebar)}
      />
      <img className="header__logo" src={logo} alt="logo" />
      <h1 className="header__title">Calendar Clone</h1>
      <MonthButton />
      <div style={{ display: "flex" }}>
        <MonthButton action={"prev"} />
        <MonthButton action={"next"} />
      </div>
      <MonthDate />
    </header>
  );
};
