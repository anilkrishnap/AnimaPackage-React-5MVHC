import React from "react";
import { MoleculesTabPrimaryDefault } from "../MoleculesTabPrimaryDefault";
import { MoleculesTabTabar1 } from "../MoleculesTabTabar1";
import { MoleculesTabPrimaryNotSelected } from "../MoleculesTabPrimaryNotSelected";
import { AtomsTabDefault } from "../AtomsTabDefault";
import "./style.css";

export const OrganismsTabBar = ({
  style,
  override = (
    <MoleculesTabPrimaryDefault
      COMPONENTTabHorizontalSelectedStyle={{
        top: "1px",
      }}
      itemNameStyle={{
        top: "5px",
      }}
      style={{
        backgroundColor: "unset",
        height: "24px",
        left: "0",
        position: "absolute",
        top: "0",
        width: "38px",
      }}
      text="Home"
    />
  ),
  MOLECULESTabTabar1 = (
    <AtomsTabDefault
      override={
        <MoleculesTabPrimaryNotSelected
          itemNameStyle={{
            top: "5px",
          }}
          style={{
            backgroundColor: "unset",
            height: "24px",
            left: "0",
            position: "absolute",
            top: "0",
            width: "57px",
          }}
          text="Tab Title"
        />
      }
      style={{
        height: "24px",
        width: "73px",
      }}
    />
  ),
}) => {
  return (
    <div className={"ORGANISMS-TAB-BAR-div"} style={style}>
      <div className={"ORGANISMS-TAB-BAR-div-2"}>
        <div className={"ORGANISMS-TAB-BAR-overlap"}>
          {override}
          <div className={"ORGANISMS-TAB-BAR-ATOMS-DIVIDERS-LINE-GRAY"} />
        </div>
        <MoleculesTabTabar1
          override={MOLECULESTabTabar1}
          style={{
            backgroundColor: "unset",
            height: "24px",
            left: "79px",
            position: "absolute",
            top: "5px",
            width: "538px",
          }}
        />
      </div>
    </div>
  );
};
