import React from "react";
import "./style.css";

export const AtomsIcon2019Settings = ({ style }) => {
  return (
    <div className={"ATOMS-ICON-2019-settings-div"} style={style}>
      <div className={"ATOMS-ICON-2019-settings-group"}>
        <div className={"ATOMS-ICON-2019-settings-ebene"}>
          <div
            className={"ATOMS-ICON-2019-settings-shape-wrapper"}
            style={{
              backgroundImage: "url(/img/shape-38.png)",
            }}
          >
            <img className={"ATOMS-ICON-2019-settings-shape"} src={"/img/shape-39.png"} />
          </div>
        </div>
      </div>
    </div>
  );
};
