import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const MoleculesTabSecondarySelected = ({ style, text = "Item Name" }) => {
  return (
    <div className={"MOLECULES-TAB-SECONDARY-SELECTED-div"} style={style}>
      <div className={"MOLECULES-TAB-SECONDARY-SELECTED-item-name"}>{text}</div>
      <img
        className={"MOLECULES-TAB-SECONDARY-SELECTED-COMPONENT-TAB-HORIZONTAL-SELECTED"}
        src={"/img/rectangle-4-2x.png"}
      />
    </div>
  );
};

MoleculesTabSecondarySelected.propTypes = {
  text: PropTypes.string,
};
