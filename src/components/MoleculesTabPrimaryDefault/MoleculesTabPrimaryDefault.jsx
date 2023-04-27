import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const MoleculesTabPrimaryDefault = ({
  style,
  itemNameStyle,
  text = "Item Name",
  COMPONENTTabHorizontalSelectedStyle,
}) => {
  return (
    <div className={"MOLECULES-TAB-PRIMARY-DEFAULT-div"} style={style}>
      <div className={"MOLECULES-TAB-PRIMARY-DEFAULT-item-name"} style={itemNameStyle}>
        {text}
      </div>
      <img
        className={"MOLECULES-TAB-PRIMARY-DEFAULT-COMPONENT-TAB-HORIZONTAL-SELECTED"}
        style={COMPONENTTabHorizontalSelectedStyle}
        src={"/img/rectangle-4-2x.png"}
      />
    </div>
  );
};

MoleculesTabPrimaryDefault.propTypes = {
  text: PropTypes.string,
};
