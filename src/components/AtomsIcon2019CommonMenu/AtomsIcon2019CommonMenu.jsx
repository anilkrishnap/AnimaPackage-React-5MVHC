import React from "react";
import "./style.css";

export const AtomsIcon2019CommonMenu = ({ style, groupStyle, ebeneStyle, groupStyleOverride }) => {
  return (
    <div className={"ATOMS-ICON-2019-common-menu-div"} style={style}>
      <div className={"ATOMS-ICON-2019-common-menu-group"} style={groupStyle}>
        <div className={"ATOMS-ICON-2019-common-menu-ebene"} style={ebeneStyle}>
          <div className={"ATOMS-ICON-2019-common-menu-group-2"} style={groupStyleOverride}>
            <div className={"ATOMS-ICON-2019-common-menu-rectangle"} />
            <div className={"ATOMS-ICON-2019-common-menu-rectangle-2"} />
            <div className={"ATOMS-ICON-2019-common-menu-rectangle-3"} />
          </div>
        </div>
      </div>
    </div>
  );
};
