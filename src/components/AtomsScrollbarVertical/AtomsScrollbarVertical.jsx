import React from "react";
import "./style.css";

export const AtomsScrollbarVertical = ({ style, overlapGroupStyle }) => {
  return (
    <div className={"ATOMS-SCROLLBAR-VERTICAL-div"} style={style}>
      <div className={"ATOMS-SCROLLBAR-VERTICAL-overlap-group"} style={overlapGroupStyle}>
        <div className={"ATOMS-SCROLLBAR-VERTICAL-rectangle"} />
      </div>
    </div>
  );
};
