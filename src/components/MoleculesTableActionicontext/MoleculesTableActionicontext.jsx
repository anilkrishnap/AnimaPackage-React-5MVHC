import React from "react";
import PropTypes from "prop-types";
import { AtomsIcon2019Compose } from "../AtomsIcon2019Compose";
import "./style.css";

export const MoleculesTableActionicontext = ({
  style,
  override = (
    <AtomsIcon2019Compose
      ebeneStyle={{
        width: "24px",
      }}
      groupStyle={{
        width: "unset",
      }}
      groupStyleOverride={{
        width: "unset",
      }}
      overlapGroupStyle={{
        width: "24px",
      }}
      style={{
        height: "24px",
        left: "0",
        position: "absolute",
        top: "0",
        width: "24px",
      }}
    />
  ),
  text = "Edit",
}) => {
  return (
    <div className={"MOLECULES-TABLE-ACTIONICONTEXT-div"} style={style}>
      {override}
      <div className={"MOLECULES-TABLE-ACTIONICONTEXT-edit"}>{text}</div>
    </div>
  );
};

MoleculesTableActionicontext.propTypes = {
  text: PropTypes.string,
};
