import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const MoleculesInputsDropdownComplete = ({
  style,
  overlapGroupStyle,
  text = "Dropdown",
  ATOMSIconArrowChevronDownDefaultStyle,
  ATOMSIconArrowChevronDownDefault = "/img/atoms-icon-arrow-chevron-down-default.png",
  rectangleStyle,
  rectangle = "/img/rectangle-7-2.png",
}) => {
  return (
    <div className={"MOLECULES-INPUTS-DROPDOWN-COMPLETE-div"} style={style}>

     
      <div className={"MOLECULES-INPUTS-DROPDOWN-COMPLETE-overlap-group"} style={overlapGroupStyle}>
      <select className={"MOLECULES-INPUTS-DROPDOWN-COMPLETE-text-wrapper"}>
        <option>{text}</option>
      </select>
      <img
          className={"MOLECULES-INPUTS-DROPDOWN-COMPLETE-ATOMS-ICON-ARROW-CHEVRON-DOWN-DEFAULT"}
          style={ATOMSIconArrowChevronDownDefaultStyle}
          src={ATOMSIconArrowChevronDownDefault}
        />
        {/* <div className={"MOLECULES-INPUTS-DROPDOWN-COMPLETE-text-wrapper"}>{text}</div>
        <img
          className={"MOLECULES-INPUTS-DROPDOWN-COMPLETE-ATOMS-ICON-ARROW-CHEVRON-DOWN-DEFAULT"}
          style={ATOMSIconArrowChevronDownDefaultStyle}
          src={ATOMSIconArrowChevronDownDefault}
        /> */}
        <img className={"MOLECULES-INPUTS-DROPDOWN-COMPLETE-rectangle"} style={rectangleStyle} src={rectangle} />
      </div>
    </div>
  );
};

MoleculesInputsDropdownComplete.propTypes = {
  text: PropTypes.string,
  ATOMSIconArrowChevronDownDefault: PropTypes.string,
  rectangle: PropTypes.string,
};
