import React from "react";
import "./style.css";

export const AtomsScrollbarHorizontal = ({ style, rectangleStyle }) => {
  return (
    <div className={"ATOMS-SCROLLBAR-HORIZONTAL-div"} style={style}>
      <div className={"ATOMS-SCROLLBAR-HORIZONTAL-rectangle"} style={rectangleStyle} />
      <div className={"ATOMS-SCROLLBAR-HORIZONTAL-rectangle-31"} />
    </div>
  );
};
