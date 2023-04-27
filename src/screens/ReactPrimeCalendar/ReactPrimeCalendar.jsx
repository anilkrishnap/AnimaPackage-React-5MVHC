import React from "react";
import "./style.css";

export const ReactPrimeCalendar = () => {
  return (
    <div className={"react-prime-calendar-react-prime-calendar"}>
      <header className={"react-prime-calendar-header"}>
        <div className={"react-prime-calendar-title"}>
          <h1 className={"react-prime-calendar-text-wrapper"}>React Prime/Calendar</h1>
          <a href="http://localhost:6006/?path=/story/react-prime-calendar" target="_blank">
            <div className={"react-prime-calendar-div"}>STORIES</div>
          </a>
          <a href="http://localhost:6006/?path=/docs/react-prime-calendar" target="_blank">
            <div className={"react-prime-calendar-div"}>DOCS</div>
          </a>
        </div>
      </header>
      <div className={"react-prime-calendar-frame"}>
        <img className={"react-prime-calendar-calendar"} src={"/img/calendar.svg"} />
        <div className={"react-prime-calendar-y-axis-legend"}>
          <div className={"react-prime-calendar-text-wrapper-2"}>Default</div>
        </div>
      </div>
    </div>
  );
};
