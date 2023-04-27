import React from "react";
import "./style.css";

export const MoleculesPaginationPrevNormal = ({ style, prevStyle }) => {
  return (
    <div className={"MOLECULES-PAGINATION-PREV-NORMAL-div"} style={style}>
      <div className={"MOLECULES-PAGINATION-PREV-NORMAL-overlap-group-wrapper"} style={prevStyle}>
        <div className={"MOLECULES-PAGINATION-PREV-NORMAL-overlap-group"}>
          <div className={"MOLECULES-PAGINATION-PREV-NORMAL-overlap"}>
            <img className={"MOLECULES-PAGINATION-PREV-NORMAL-img"} src={"/img/left-caret.png"} />
            <img className={"MOLECULES-PAGINATION-PREV-NORMAL-img-2"} src={"/img/left-caret.png"} />
          </div>
          <img className={"MOLECULES-PAGINATION-PREV-NORMAL-left-caret-copy"} src={"/img/left-caret.png"} />
          <img className={"MOLECULES-PAGINATION-PREV-NORMAL-line"} src={"/img/line-5.png"} />
        </div>
      </div>
    </div>
  );
};
