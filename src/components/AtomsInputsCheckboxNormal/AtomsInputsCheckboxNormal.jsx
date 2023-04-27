import React from "react";
import "./style.css";

export const AtomsInputsCheckboxNormal = ({ style, rectangleStyle }) => {
  return (
    <div className={"ATOMS-INPUTS-CHECKBOX-NORMAL-div"} style={style}>
      <div className={"ATOMS-INPUTS-CHECKBOX-NORMAL-rectangle"} style={rectangleStyle} />
    </div>
  );
};
