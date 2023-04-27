import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const AtomsIconFilterClear = ({ style, clearFiltersStyle, shapeStyle, shape = "/img/shape-71.png" }) => {
  return (
    <div className={"ATOMS-ICON-filter-clear-div"} style={style}>
      <div
        className={"ATOMS-ICON-filter-clear-clear-filters"}
        style={{
          ...{
            backgroundImage: "url(/img/path-29.png)",
          },
          ...clearFiltersStyle,
        }}
      >
        <img className={"ATOMS-ICON-filter-clear-shape"} style={shapeStyle} src={shape} />
      </div>
    </div>
  );
};

AtomsIconFilterClear.propTypes = {
  shape: PropTypes.string,
};
