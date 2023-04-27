import React from "react";
import "./style.css";

export const MoleculesTableRowDefaultNew = ({ style, overlapGroupStyle, ATOMSDividersLineBlackStyle }) => {
  return (
    <div className={"MOLECULES-TABLE-ROW-DEFAULT-NEW-div"} style={style}>
      <div className={"MOLECULES-TABLE-ROW-DEFAULT-NEW-overlap-group"} style={overlapGroupStyle}>
        <div
          className={"MOLECULES-TABLE-ROW-DEFAULT-NEW-ATOMS-DIVIDERS-LINE-BLACK"}
          style={ATOMSDividersLineBlackStyle}
        />
      </div>
    </div>
  );
};
