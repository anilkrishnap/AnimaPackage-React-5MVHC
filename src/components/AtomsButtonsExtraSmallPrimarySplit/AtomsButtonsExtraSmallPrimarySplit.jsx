import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const AtomsButtonsExtraSmallPrimarySplit = ({
  style,
  overlapGroupStyle,
  backgroundStyle,
  rectangleStyle,
  ATOMSIconArrowChevronDownDefaultStyle,
  ATOMSIconArrowChevronDownDefault = "/img/atoms-icon-arrow-chevron-down-default-50.png",
  text = "Lorem",
  loremStyle,
}) => {
  return (
    <div className={"ATOMS-BUTTONS-EXTRA-SMALL-PRIMARY-SPLIT-div"} style={style}>
      <div className={"ATOMS-BUTTONS-EXTRA-SMALL-PRIMARY-SPLIT-overlap-group"} style={overlapGroupStyle}>
        <div className={"ATOMS-BUTTONS-EXTRA-SMALL-PRIMARY-SPLIT-background"} style={backgroundStyle} />
        <div className={"ATOMS-BUTTONS-EXTRA-SMALL-PRIMARY-SPLIT-rectangle"} style={rectangleStyle} />
        <img
          className={"ATOMS-BUTTONS-EXTRA-SMALL-PRIMARY-SPLIT-ATOMS-ICON-ARROW-CHEVRON-DOWN-DEFAULT"}
          style={ATOMSIconArrowChevronDownDefaultStyle}
          src={ATOMSIconArrowChevronDownDefault}
        />
        <div className={"ATOMS-BUTTONS-EXTRA-SMALL-PRIMARY-SPLIT-lorem"} style={loremStyle}>
          {text}
        </div>
      </div>
    </div>
  );
};

AtomsButtonsExtraSmallPrimarySplit.propTypes = {
  ATOMSIconArrowChevronDownDefault: PropTypes.string,
  text: PropTypes.string,
};
