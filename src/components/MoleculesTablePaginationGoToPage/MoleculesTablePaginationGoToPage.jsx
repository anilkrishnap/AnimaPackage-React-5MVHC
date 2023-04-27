import React from "react";
import "./style.css";

export const MoleculesTablePaginationGoToPage = ({ style }) => {
  return (
    <div className={"MOLECULES-TABLE-PAGINATION-GO-TO-PAGE-div"} style={style}>
      <div className={"MOLECULES-TABLE-PAGINATION-GO-TO-PAGE-element"}>/&nbsp;&nbsp; 20</div>
      <div className={"MOLECULES-TABLE-PAGINATION-GO-TO-PAGE-MOLECULES-INPUTS-STANDARD-COMPLETE"}>
        <div className={"MOLECULES-TABLE-PAGINATION-GO-TO-PAGE-div-2"}>
          <div className={"MOLECULES-TABLE-PAGINATION-GO-TO-PAGE-text-wrapper"}>2</div>
          <img className={"MOLECULES-TABLE-PAGINATION-GO-TO-PAGE-rectangle"} src={"/img/rectangle-7-6.png"} />
        </div>
      </div>
    </div>
  );
};
