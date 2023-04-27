import React from "react";
import { MoleculesTabPrimaryDefault } from "../MoleculesTabPrimaryDefault";
import "./style.css";

export const AtomsTabSelected = ({ style }) => {
  return (
    <div className={"ATOMS-TAB-SELECTED-div"} style={style}>
      <MoleculesTabPrimaryDefault
        COMPONENTTabHorizontalSelectedStyle={{
          top: "1px",
        }}
        itemNameStyle={{
          top: "5px",
        }}
        style={{
          backgroundColor: "unset",
          height: "24px",
          left: "0",
          position: "absolute",
          top: "0",
          width: "56px",
        }}
        text="Tab Title"
      />
      <img className={"ATOMS-TAB-SELECTED-ATOMS-ICON-close"} src={"/img/atoms-icon-2019-close.png"} />
    </div>
  );
};
