import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const MoleculesCollapsibleTitleLevel12Closed = ({
  style,
  placeholderTextStyle,
  text = "Placeholder Text",
  ATOMSIconCtaCaretCopyStyle,
  ATOMSIconCtaCaretCopy = "/img/atoms-icon-2019-cta-caret-copy.png",
}) => {
  return (
    <div className={"MOLECULES-COLLAPSIBLE-TITLE-LEVEL-1-2-CLOSED-div"} style={style}>
      <div className={"MOLECULES-COLLAPSIBLE-TITLE-LEVEL-1-2-CLOSED-placeholder-text"} style={placeholderTextStyle}>
        {text}
      </div>
      <img
        className={"MOLECULES-COLLAPSIBLE-TITLE-LEVEL-1-2-CLOSED-ATOMS-ICON-CTA-caret-copy"}
        style={ATOMSIconCtaCaretCopyStyle}
        src={ATOMSIconCtaCaretCopy}
      />
    </div>
  );
};

MoleculesCollapsibleTitleLevel12Closed.propTypes = {
  text: PropTypes.string,
  ATOMSIconCtaCaretCopy: PropTypes.string,
};
