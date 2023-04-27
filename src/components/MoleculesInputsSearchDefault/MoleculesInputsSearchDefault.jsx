import React from "react";
import PropTypes from "prop-types";
import { AtomsIcon2019CommonSearch } from "../AtomsIcon2019CommonSearch";
import "./style.css";

export const MoleculesInputsSearchDefault = ({
  style,
  overlapGroupStyle,
  ATOMSIcon2019CommonSearchAtomsIconCommonSearchStyle,
  ATOMSIcon2019CommonSearchGroupStyle,
  rectangleStyle,
  rectangle = "/img/rectangle-7-2.png",
}) => {
  return (
    <div className={"MOLECULES-INPUTS-SEARCH-DEFAULT-div"} style={style}>
      <div className={"MOLECULES-INPUTS-SEARCH-DEFAULT-overlap-group"} style={overlapGroupStyle}>
        <AtomsIcon2019CommonSearch
          groupStyle={ATOMSIcon2019CommonSearchGroupStyle}
          style={ATOMSIcon2019CommonSearchAtomsIconCommonSearchStyle}
        />
        <input className={"MOLECULES-INPUTS-SEARCH-DEFAULT-text-wrapper"} placeholder="Search"/>
        <img className={"MOLECULES-INPUTS-SEARCH-DEFAULT-rectangle"} style={rectangleStyle} src={rectangle} />
      </div>
    </div>
  );
};

MoleculesInputsSearchDefault.propTypes = {
  rectangle: PropTypes.string,
};
