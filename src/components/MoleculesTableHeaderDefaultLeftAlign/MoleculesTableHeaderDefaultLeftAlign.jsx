import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const MoleculesTableHeaderDefaultLeftAlign = ({ style, columnStyle, text = "Column" }) => {
  return (
    <div className={"MOLECULES-TABLE-HEADER-DEFAULT-LEFT-ALIGN-div"} style={style}>
      <div className={"MOLECULES-TABLE-HEADER-DEFAULT-LEFT-ALIGN-column"} style={columnStyle}>
        {text}
      </div>
    </div>
  );
};

MoleculesTableHeaderDefaultLeftAlign.propTypes = {
  text: PropTypes.string,
};
