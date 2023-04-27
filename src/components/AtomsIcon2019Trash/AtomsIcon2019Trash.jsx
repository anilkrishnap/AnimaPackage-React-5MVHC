import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const AtomsIcon2019Trash = ({
  style,
  groupStyle,
  ebeneStyle,
  groupStyleOverride,
  overlapGroupStyle,
  rectangleStyle,
  rectangleStyleOverride,
  shapeStyle,
  shape = "/img/shape-29.png",
}) => {
  return (
    <div className={"ATOMS-ICON-2019-trash-div"} style={style}>
      <div className={"ATOMS-ICON-2019-trash-group"} style={groupStyle}>
        <div className={"ATOMS-ICON-2019-trash-ebene"} style={ebeneStyle}>
          <div className={"ATOMS-ICON-2019-trash-group-2"} style={groupStyleOverride}>
            
          <span class="material-symbols-outlined">close</span>
          </div>
        </div>
      </div>
    </div>
  );
};

AtomsIcon2019Trash.propTypes = {
  shape: PropTypes.string,
};
