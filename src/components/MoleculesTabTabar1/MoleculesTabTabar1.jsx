import React from "react";
import { AtomsTabSelected } from "../AtomsTabSelected";
import "./style.css";

export const MoleculesTabTabar1 = ({
  style,
  override = (
    <AtomsTabSelected
      style={{
        backgroundColor: "unset",
        height: "24px",
        width: "73px",
      }}
    />
  ),
}) => {
  return (
    <div className={"MOLECULES-TAB-TABAR-1-div"} style={style}>
      {override}
    </div>
  );
};
