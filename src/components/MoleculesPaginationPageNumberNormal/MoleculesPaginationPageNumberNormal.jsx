import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const MoleculesPaginationPageNumberNormal = ({ style, pageNumberStyle, text = "1" }) => {
  return (
    <div className={"MOLECULES-PAGINATION-PAGE-NUMBER-NORMAL-div"} style={style}>
      <div className={"MOLECULES-PAGINATION-PAGE-NUMBER-NORMAL-page-number"} style={pageNumberStyle}>
        {text}
      </div>
    </div>
  );
};

MoleculesPaginationPageNumberNormal.propTypes = {
  text: PropTypes.string,
};
