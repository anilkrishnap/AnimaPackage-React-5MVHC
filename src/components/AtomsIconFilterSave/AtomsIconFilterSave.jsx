import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const AtomsIconFilterSave = ({
  style,
  saveGridSettingsStyle,
  pathStyle,
  path = "/img/path-28.png",
  rectangleStyle,
}) => {
  return (
    <div className={"ATOMS-ICON-filter-save-div"} style={style}>
      <span class="material-symbols-outlined">save</span>
    </div>
  );
};

AtomsIconFilterSave.propTypes = {
  path: PropTypes.string,
};
