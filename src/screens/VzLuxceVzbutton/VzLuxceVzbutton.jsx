import React from "react";
import "./style.css";

export const VzLuxceVzbutton = () => {
  return (
    <div className={"vz-LUXCE-vzbutton-vz-LUXCE-vzbutton"}>
      <header className={"vz-LUXCE-vzbutton-header"}>
        <div className={"vz-LUXCE-vzbutton-title"}>
          <h1 className={"vz-LUXCE-vzbutton-text-wrapper"}>Vz LUXCE/VzButton</h1>
          <a href="http://localhost:6006/?path=/story/vz-luxce-vzbutton" target="_blank">
            <div className={"vz-LUXCE-vzbutton-div"}>STORIES</div>
          </a>
          <a href="http://localhost:6006/?path=/docs/vz-luxce-vzbutton" target="_blank">
            <div className={"vz-LUXCE-vzbutton-div"}>DOCS</div>
          </a>
        </div>
      </header>
      <div className={"vz-LUXCE-vzbutton-frame"}>
        <img className={"vz-LUXCE-vzbutton-vz-button"} src={"/img/vzbutton.svg"} />
        <div className={"vz-LUXCE-vzbutton-y-axis-legend"}>
          <div className={"vz-LUXCE-vzbutton-text-wrapper-2"}>False</div>
        </div>
      </div>
    </div>
  );
};
