import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const AtomsButtonsSmallPrimaryDefault = ({ style, overlapGroupStyle, loremStyle, text = "Lorem" }) => {
  return (
    <div className={"ATOMS-BUTTONS-SMALL-PRIMARY-DEFAULT-div"} style={style}>
      <div className={"ATOMS-BUTTONS-SMALL-PRIMARY-DEFAULT-overlap-group"} style={overlapGroupStyle}>
        <div className={"ATOMS-BUTTONS-SMALL-PRIMARY-DEFAULT-lorem"} style={loremStyle}>
          {text}
        </div>
      </div>
    </div>
  );
};

AtomsButtonsSmallPrimaryDefault.propTypes = {
  text: PropTypes.string,
};
