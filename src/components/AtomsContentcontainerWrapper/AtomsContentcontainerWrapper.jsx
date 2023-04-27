import React from "react";
import "./style.css";

export const AtomsContentcontainerWrapper = ({ style, rectangleStyle }) => {
  return (
    <div className={"ATOMS-CONTENTCONTAINER-wrapper-div"} style={style}>
      <div className={"ATOMS-CONTENTCONTAINER-wrapper-rectangle"} style={rectangleStyle} />
    </div>
  );
};
