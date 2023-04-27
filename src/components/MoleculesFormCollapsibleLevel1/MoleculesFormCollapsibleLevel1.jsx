import React from "react";
import PropTypes from "prop-types";
import { AtomsContentcontainer } from "../AtomsContentcontainer";
import { MoleculesCollapsibleTitleLevel12Closed } from "../MoleculesCollapsibleTitleLevel12Closed";
import "./style.css";

export const MoleculesFormCollapsibleLevel1 = ({
  style,
  overlapGroupStyle,
  MOLECULESCollapsibleTitleLevel12ClosedAtomsIconCtaCaretCopy = "/img/atoms-icon-2019-cta-caret-copy.png",
  MOLECULESCollapsibleTitleLevel12ClosedText = "Placeholder Text",
}) => {
  return (
    <div className={"MOLECULES-FORM-COLLAPSIBLE-LEVEL-1-div"} style={style}>
      <div className={"MOLECULES-FORM-COLLAPSIBLE-LEVEL-1-overlap-group"} style={overlapGroupStyle}>
        <AtomsContentcontainer
          rectangleStyle={{
            height: "42px",
          }}
          style={{
            height: "40px",
            left: "0",
            position: "absolute",
            top: "0",
            width: "1004px",
          }}
        />
        <MoleculesCollapsibleTitleLevel12Closed
          ATOMSIconCtaCaretCopy={MOLECULESCollapsibleTitleLevel12ClosedAtomsIconCtaCaretCopy}
          ATOMSIconCtaCaretCopyStyle={{
            top: "0",
          }}
          placeholderTextStyle={{
            top: "0",
          }}
          style={{
            height: "19px",
            left: "10px",
            position: "absolute",
            top: "10px",
            width: "181px",
          }}
          text={MOLECULESCollapsibleTitleLevel12ClosedText}
        />
      </div>
    </div>
  );
};

MoleculesFormCollapsibleLevel1.propTypes = {
  MOLECULESCollapsibleTitleLevel12ClosedAtomsIconCtaCaretCopy: PropTypes.string,
  MOLECULESCollapsibleTitleLevel12ClosedText: PropTypes.string,
};
