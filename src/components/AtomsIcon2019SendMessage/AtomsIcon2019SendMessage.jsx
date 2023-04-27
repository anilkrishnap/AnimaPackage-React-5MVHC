import React from "react";
import "./style.css";

export const AtomsIcon2019SendMessage = ({ style, groupStyle }) => {
  return (
    <div className={"ATOMS-ICON-2019-send-message-div"} style={style}>
      <div
        className={"ATOMS-ICON-2019-send-message-group"}
        style={{
          ...{
            backgroundImage: "url(/img/shape-84.png)",
          },
          ...groupStyle,
        }}
      />
    </div>
  );
};
