import React from "react";
import "./style.css";

export const ReactPrimeButton = () => {
  return (
    <div className={"react-prime-button-react-prime-button"}>
      <header className={"react-prime-button-header"}>
        <div className={"react-prime-button-title"}>
          <h1 className={"react-prime-button-text-wrapper"}>React Prime/Button</h1>
          <a href="http://localhost:6006/?path=/story/react-prime-button" target="_blank">
            <div className={"react-prime-button-div"}>STORIES</div>
          </a>
          <a href="http://localhost:6006/?path=/docs/react-prime-button" target="_blank">
            <div className={"react-prime-button-div"}>DOCS</div>
          </a>
        </div>
      </header>
      <div className={"react-prime-button-frame"}>
        <img className={"react-prime-button-button"} src={"/img/button.svg"} />
        <div className={"react-prime-button-y-axis-legend"}>
          <div className={"react-prime-button-text-wrapper-2"}>default</div>
        </div>
      </div>
    </div>
  );
};
