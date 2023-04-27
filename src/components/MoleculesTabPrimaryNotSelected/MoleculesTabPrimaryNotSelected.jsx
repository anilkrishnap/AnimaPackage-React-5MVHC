import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const MoleculesTabPrimaryNotSelected = ({ style, itemNameStyle, text = "Item Name" }) => {
  return (
    <div className={"MOLECULES-TAB-PRIMARY-NOT-SELECTED-div"} style={style}>
      <div className={"MOLECULES-TAB-PRIMARY-NOT-SELECTED-item-name"} style={itemNameStyle}>
        {text}
      </div>
    </div>
  );
};

MoleculesTabPrimaryNotSelected.propTypes = {
  text: PropTypes.string,
};
