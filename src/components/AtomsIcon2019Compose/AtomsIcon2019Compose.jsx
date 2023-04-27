import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const AtomsIcon2019Compose = ({
  style,
  groupStyle,
  ebeneStyle,
  groupStyleOverride,
  overlapGroupStyle,
  pathStyle,
  path = "/img/path-12.png",
  shapeStyle,
  shape = "/img/shape-87.png",
}) => {
  return (
    <div className={"ATOMS-ICON-2019-compose-div"} style={style}>
      <div className={"ATOMS-ICON-2019-compose-group"} style={groupStyle}>
        <div className={"ATOMS-ICON-2019-compose-ebene"} style={ebeneStyle}>
          <div className={"ATOMS-ICON-2019-compose-group"} style={groupStyleOverride}>
            <div className={"ATOMS-ICON-2019-compose-overlap-group"} style={overlapGroupStyle}>
              <img className={"ATOMS-ICON-2019-compose-path"} style={pathStyle} src={path} />
              <img className={"ATOMS-ICON-2019-compose-shape"} style={shapeStyle} src={shape} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AtomsIcon2019Compose.propTypes = {
  path: PropTypes.string,
  shape: PropTypes.string,
};
