import React from "react";
import { MoleculesTabPrimaryNotSelected } from "../MoleculesTabPrimaryNotSelected";
import "./style.css";

export const AtomsTabDefault = ({
  style,
  override = (
    <MoleculesTabPrimaryNotSelected
      itemNameStyle={{
        top: "5px",
      }}
      style={{
        backgroundColor: "unset",
        height: "24px",
        left: "0",
        position: "absolute",
        top: "0",
        width: "57px",
      }}
      text="Tab Title"
    />
  ),
}) => {
  return (
    <div className={"ATOMS-TAB-DEFAULT-div"} style={style}>
      <img className={"ATOMS-TAB-DEFAULT-ATOMS-ICON-close"} src={"/img/atoms-icon-2019-close.png"} />
      {override}
    </div>
  );
};
