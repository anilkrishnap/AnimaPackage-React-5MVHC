import React from "react";
import { AtomsDividersLine3PxBlack } from "../AtomsDividersLine3PxBlack";
import { AtomsDividersLine1PxBlack } from "../AtomsDividersLine1PxBlack";
import "./style.css";

export const MoleculesTableColumnheaderNew = ({ style }) => {
  return (
    <div className={"MOLECULES-TABLE-COLUMNHEADER-NEW-div"} style={style}>
      <AtomsDividersLine3PxBlack
        style={{
          backgroundColor: "unset",
          height: "3px",
          left: "0",
          position: "absolute",
          top: "37px",
          width: "1004px",
        }}
      />
      <AtomsDividersLine1PxBlack
        style={{
          backgroundColor: "unset",
          height: "1px",
          left: "0",
          position: "absolute",
          top: "0",
          width: "1004px",
        }}
      />
    </div>
  );
};
