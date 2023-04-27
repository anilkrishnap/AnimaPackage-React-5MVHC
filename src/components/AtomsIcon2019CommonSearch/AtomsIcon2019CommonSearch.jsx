import React from "react";
import "./style.css";

export const AtomsIcon2019CommonSearch = ({ style, groupStyle }) => {
  return (
    <div className={"ATOMS-ICON-2019-common-search-div"} style={style}>
      <div
        className={"ATOMS-ICON-2019-common-search-group"}
        style={{
          ...{
            backgroundImage: "url(/img/shape-70.png)",
          },
          ...groupStyle,
        }}
      />
    </div>
  );
};
