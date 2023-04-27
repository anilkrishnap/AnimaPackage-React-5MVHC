import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const MoleculesInputsDropdownDefault = ({
  style,
  overlapGroupStyle,
  text = "Dropdown",
  rectangleStyle,
  rectangle = "/img/rectangle-7-2.png",
  ATOMSIconArrowChevronDownDefaultStyle,
}) => {
  return (
    <div className={"MOLECULES-INPUTS-DROPDOWN-DEFAULT-div"} style={style}>
      <div className={"MOLECULES-INPUTS-DROPDOWN-DEFAULT-overlap-group"} style={overlapGroupStyle}>
      <select className={"MOLECULES-INPUTS-DROPDOWN-DEFAULT-text-wrapper"}>
        <option>{text}</option>
      </select>
      <img
          className={"MOLECULES-INPUTS-DROPDOWN-DEFAULT-ATOMS-ICON-ARROW-CHEVRON-DOWN-DEFAULT"}
          style={ATOMSIconArrowChevronDownDefaultStyle}
          src={"/img/atoms-icon-arrow-chevron-down-default.png"}
        />
        {/* <img className={"MOLECULES-INPUTS-DROPDOWN-DEFAULT-rectangle"} style={rectangleStyle} src={rectangle} />
        <div className={"MOLECULES-INPUTS-DROPDOWN-DEFAULT-text-wrapper"}>{text}</div>
        <img
          className={"MOLECULES-INPUTS-DROPDOWN-DEFAULT-ATOMS-ICON-ARROW-CHEVRON-DOWN-DEFAULT"}
          style={ATOMSIconArrowChevronDownDefaultStyle}
          src={"/img/atoms-icon-arrow-chevron-down-default.png"}
        /> */}
      </div>
    </div>
  );
};

MoleculesInputsDropdownDefault.propTypes = {
  text: PropTypes.string,
  rectangle: PropTypes.string,
};
