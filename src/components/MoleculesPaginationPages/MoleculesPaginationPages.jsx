import React from "react";
import { MoleculesPaginationNextNormal } from "../MoleculesPaginationNextNormal";
import { MoleculesPaginationPageNumberActive } from "../MoleculesPaginationPageNumberActive";
import { MoleculesPaginationPageNumberNormal } from "../MoleculesPaginationPageNumberNormal";
import { MoleculesPaginationPrevNormal } from "../MoleculesPaginationPrevNormal";
import "./style.css";

export const MoleculesPaginationPages = ({
  style,
  MOLECULESPaginationPrevNormalMoleculesPaginationPrevNormalStyle,
  pagesStyle,
  MOLECULESPaginationPageNumberNormalMoleculesPaginationPageNumberNormalStyle,
  MOLECULESPaginationPageNumberNormalPageNumberStyle,
  MOLECULESPaginationPageNumberNormalMoleculesPaginationPageNumberNormalStyleOverride,
  MOLECULESPaginationPageNumberNormalPageNumberStyleOverride,
  MOLECULESPaginationPageNumberNormalPageNumberWrapperStyle,
  MOLECULESPaginationPageNumberNormalPageNumber1281Style,
  MOLECULESPaginationPageNumberNormalPageNumberWrapperStyleOverride,
  MOLECULESPaginationPageNumberNormalPageNumber1281StyleOverride,
  MOLECULESPaginationPageNumberNormalPageNumber1281WrapperStyle,
  MOLECULESPaginationPageNumberNormalDivStyle,
  MOLECULESPaginationPageNumberNormalPageNumber1281WrapperStyleOverride,
  MOLECULESPaginationPageNumberNormalDivStyleOverride,
  MOLECULESPaginationPageNumberNormalMoleculesPaginationPageNumberNormalStyle1,
  MOLECULESPaginationPageNumberNormalPageNumberStyle1,
  MOLECULESPaginationPageNumberNormalMoleculesPaginationPageNumberNormalStyle2,
  MOLECULESPaginationPageNumberNormalPageNumberStyle2,
  MOLECULESPaginationPageNumberNormalMoleculesPaginationPageNumberNormalStyle3,
  MOLECULESPaginationPageNumberNormalPageNumberStyle3,
  MOLECULESPaginationPageNumberActiveOverlapGroupStyle,
  MOLECULESPaginationPageNumberActiveMoleculesPaginationPageNumberActiveStyle,
  MOLECULESPaginationNextNormalMoleculesPaginationNextNormalStyle,
  MOLECULESPaginationPageNumberActivePageNumberStyle,
}) => {
  return (
    <div className={"MOLECULES-PAGINATION-PAGES-div"} style={style}>
      <MoleculesPaginationPrevNormal
        prevStyle={{
          width: "unset",
        }}
        style={MOLECULESPaginationPrevNormalMoleculesPaginationPrevNormalStyle}
      />
      <div className={"MOLECULES-PAGINATION-PAGES-pages"} style={pagesStyle}>
        <MoleculesPaginationPageNumberNormal
          pageNumberStyle={MOLECULESPaginationPageNumberNormalPageNumberStyle}
          style={MOLECULESPaginationPageNumberNormalMoleculesPaginationPageNumberNormalStyle}
          text="10"
        />
        <MoleculesPaginationPageNumberNormal
          pageNumberStyle={MOLECULESPaginationPageNumberNormalPageNumberStyleOverride}
          style={MOLECULESPaginationPageNumberNormalMoleculesPaginationPageNumberNormalStyleOverride}
          text="9"
        />
        <MoleculesPaginationPageNumberNormal
          pageNumberStyle={MOLECULESPaginationPageNumberNormalPageNumber1281Style}
          style={MOLECULESPaginationPageNumberNormalPageNumberWrapperStyle}
          text="8"
        />
        <MoleculesPaginationPageNumberNormal
          pageNumberStyle={MOLECULESPaginationPageNumberNormalPageNumber1281StyleOverride}
          style={MOLECULESPaginationPageNumberNormalPageNumberWrapperStyleOverride}
          text="7"
        />
        <MoleculesPaginationPageNumberNormal
          pageNumberStyle={MOLECULESPaginationPageNumberNormalDivStyle}
          style={MOLECULESPaginationPageNumberNormalPageNumber1281WrapperStyle}
          text="6"
        />
        <MoleculesPaginationPageNumberNormal
          pageNumberStyle={MOLECULESPaginationPageNumberNormalDivStyleOverride}
          style={MOLECULESPaginationPageNumberNormalPageNumber1281WrapperStyleOverride}
          text="5"
        />
        <MoleculesPaginationPageNumberNormal
          pageNumberStyle={MOLECULESPaginationPageNumberNormalPageNumberStyle1}
          style={MOLECULESPaginationPageNumberNormalMoleculesPaginationPageNumberNormalStyle1}
          text="4"
        />
        <MoleculesPaginationPageNumberNormal
          pageNumberStyle={MOLECULESPaginationPageNumberNormalPageNumberStyle2}
          style={MOLECULESPaginationPageNumberNormalMoleculesPaginationPageNumberNormalStyle2}
          text="3"
        />
        <MoleculesPaginationPageNumberNormal
          pageNumberStyle={MOLECULESPaginationPageNumberNormalPageNumberStyle3}
          style={MOLECULESPaginationPageNumberNormalMoleculesPaginationPageNumberNormalStyle3}
          text="2"
        />
        <MoleculesPaginationPageNumberActive
          overlapGroupStyle={MOLECULESPaginationPageNumberActiveOverlapGroupStyle}
          pageNumberStyle={MOLECULESPaginationPageNumberActivePageNumberStyle}
          style={MOLECULESPaginationPageNumberActiveMoleculesPaginationPageNumberActiveStyle}
        />
      </div>
      <MoleculesPaginationNextNormal
        nextStyle={{
          width: "unset",
        }}
        style={MOLECULESPaginationNextNormalMoleculesPaginationNextNormalStyle}
      />
    </div>
  );
};
