import React from "react";
import "./style.css";

export const MoleculesPaginationPageNumberActive = ({ style, overlapGroupStyle, pageNumberStyle }) => {
  return (
    <div className={"MOLECULES-PAGINATION-PAGE-NUMBER-ACTIVE-div"} style={style}>
      <div className={"MOLECULES-PAGINATION-PAGE-NUMBER-ACTIVE-overlap-group"} style={overlapGroupStyle}>
        <div className={"MOLECULES-PAGINATION-PAGE-NUMBER-ACTIVE-page-number"} style={pageNumberStyle}>
          1
        </div>
      </div>
    </div>
  );
};
