import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const MoleculesTabSecondaryDefault = ({ style, itemNameStyle, text = "Item Name" }) => {
  return (
    <div className={"MOLECULES-TAB-SECONDARY-DEFAULT-div"} style={style}>
      <div className={"MOLECULES-TAB-SECONDARY-DEFAULT-item-name"} style={itemNameStyle}>
        {text}
      </div>
    </div>
  );
};

MoleculesTabSecondaryDefault.propTypes = {
  text: PropTypes.string,
};
