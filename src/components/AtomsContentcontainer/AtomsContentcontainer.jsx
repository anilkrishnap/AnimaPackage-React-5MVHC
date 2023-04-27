import React from "react";
import "./style.css";

export const AtomsContentcontainer = ({ style, rectangleStyle }) => {
  return (
    <div className={"ATOMS-CONTENTCONTAINER-div"} style={style}>
      <div className={"ATOMS-CONTENTCONTAINER-rectangle"} style={rectangleStyle} />
    </div>
  );
};
