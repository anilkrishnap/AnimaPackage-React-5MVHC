import React from "react";
import "./style.css";

export const MoleculesTableRowStateSelected = ({ style, rectangleStyle }) => {
  return (
    <div className={"MOLECULES-TABLE-ROW-STATE-SELECTED-div"} style={style}>
      <div className={"MOLECULES-TABLE-ROW-STATE-SELECTED-rectangle"} style={rectangleStyle} />
    </div>
  );
};
