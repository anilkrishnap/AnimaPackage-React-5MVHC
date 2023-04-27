import React from "react";
import "./style.css";

export const MoleculesPaginationNextNormal = ({ style, nextStyle }) => {
  return (
    <div className={"MOLECULES-PAGINATION-NEXT-NORMAL-div"} style={style}>
      <div className={"MOLECULES-PAGINATION-NEXT-NORMAL-overlap-group-wrapper"} style={nextStyle}>
        <div className={"MOLECULES-PAGINATION-NEXT-NORMAL-overlap-group"}>
          <div className={"MOLECULES-PAGINATION-NEXT-NORMAL-overlap"}>
            <img className={"MOLECULES-PAGINATION-NEXT-NORMAL-img"} src={"/img/shape.png"} />
            <img className={"MOLECULES-PAGINATION-NEXT-NORMAL-img-2"} src={"/img/shape.png"} />
          </div>
          <img className={"MOLECULES-PAGINATION-NEXT-NORMAL-shape"} src={"/img/shape.png"} />
          <img className={"MOLECULES-PAGINATION-NEXT-NORMAL-line-copy"} src={"/img/line-5.png"} />
        </div>
      </div>
    </div>
  );
};
