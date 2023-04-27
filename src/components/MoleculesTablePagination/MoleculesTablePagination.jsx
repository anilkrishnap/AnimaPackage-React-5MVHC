import React from "react";
import { AtomsButtonsExtraSmallPrimarySplit } from "../AtomsButtonsExtraSmallPrimarySplit";
import { MoleculesTablePaginationGoToPage } from "../MoleculesTablePaginationGoToPage";
import { MoleculesPaginationPages } from "../MoleculesPaginationPages";
import { MoleculesInputsDropdownDefault } from "../MoleculesInputsDropdownDefault";
import "./style.css";

export const MoleculesTablePagination = ({
  style,
  MOLECULESPaginationPagesMoleculesPaginationNextNormalMoleculesPaginationNextNormalStyle,
  MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalPageNumberStyle,
  MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalMoleculesPaginationPageNumberNormalStyle,
  MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalMoleculesPaginationPageNumberNormalStyleOverride,
  MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalPageNumberWrapperStyle,
  MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalPageNumberStyleOverride,
  MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalPageNumber1281Style,
  MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalPageNumber1281StyleOverride,
  MOLECULESPaginationPagesMoleculesPaginationPageNumberActiveOverlapGroupStyle,
  MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalPageNumberWrapperStyleOverride,
  MOLECULESPaginationPagesPagesStyle,
  MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalPageNumber1281WrapperStyle,
  MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalDivStyle,
  MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalDivStyleOverride,
  MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalPageNumberStyle1,
  MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalPageNumberStyle2,
  MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalPageNumber1281WrapperStyleOverride,
  MOLECULESPaginationPagesMoleculesPaginationPagesStyle,
  MOLECULESPaginationPagesMoleculesPaginationPageNumberActiveMoleculesPaginationPageNumberActiveStyle,
  MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalMoleculesPaginationPageNumberNormalStyle1,
  MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalMoleculesPaginationPageNumberNormalStyle2,
  MOLECULESPaginationPagesMoleculesPaginationPrevNormalMoleculesPaginationPrevNormalStyle,
  MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalMoleculesPaginationPageNumberNormalStyle3,
  MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalPageNumberStyle3,
  groupStyle,
  MOLECULESTablePaginationGoToPageMoleculesTablePaginationGoToPageStyle,
  ATOMSButtonsExtraSmallPrimarySplitAtomsButtonsExtraSmallPrimarySplitStyle,
  MOLECULESInputsDropdownDefaultMoleculesInputsDropdownDefaultStyle,
  MOLECULESPaginationPagesMoleculesPaginationPageNumberActivePageNumberStyle,
  ATOMSButtonsExtraSmallPrimarySplitLoremStyle,
}) => {
  return (
    <div className={"MOLECULES-TABLE-PAGINATION-div"} style={style}>
      <MoleculesPaginationPages
        MOLECULESPaginationNextNormalMoleculesPaginationNextNormalStyle={
          MOLECULESPaginationPagesMoleculesPaginationNextNormalMoleculesPaginationNextNormalStyle
        }
        MOLECULESPaginationPageNumberActiveMoleculesPaginationPageNumberActiveStyle={
          MOLECULESPaginationPagesMoleculesPaginationPageNumberActiveMoleculesPaginationPageNumberActiveStyle
        }
        MOLECULESPaginationPageNumberActiveOverlapGroupStyle={
          MOLECULESPaginationPagesMoleculesPaginationPageNumberActiveOverlapGroupStyle
        }
        MOLECULESPaginationPageNumberActivePageNumberStyle={
          MOLECULESPaginationPagesMoleculesPaginationPageNumberActivePageNumberStyle
        }
        MOLECULESPaginationPageNumberNormalDivStyle={
          MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalDivStyle
        }
        MOLECULESPaginationPageNumberNormalDivStyleOverride={
          MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalPageNumberStyleOverride
        }
        MOLECULESPaginationPageNumberNormalMoleculesPaginationPageNumberNormalStyle={
          MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalMoleculesPaginationPageNumberNormalStyle1
        }
        MOLECULESPaginationPageNumberNormalMoleculesPaginationPageNumberNormalStyle1={
          MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalPageNumber1281WrapperStyleOverride
        }
        MOLECULESPaginationPageNumberNormalMoleculesPaginationPageNumberNormalStyle2={
          MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalPageNumber1281WrapperStyle
        }
        MOLECULESPaginationPageNumberNormalMoleculesPaginationPageNumberNormalStyle3={
          MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalMoleculesPaginationPageNumberNormalStyle
        }
        MOLECULESPaginationPageNumberNormalMoleculesPaginationPageNumberNormalStyleOverride={
          MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalMoleculesPaginationPageNumberNormalStyleOverride
        }
        MOLECULESPaginationPageNumberNormalPageNumber1281Style={
          MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalPageNumberStyle3
        }
        MOLECULESPaginationPageNumberNormalPageNumber1281StyleOverride={
          MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalPageNumber1281Style
        }
        MOLECULESPaginationPageNumberNormalPageNumber1281WrapperStyle={
          MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalPageNumberWrapperStyleOverride
        }
        MOLECULESPaginationPageNumberNormalPageNumber1281WrapperStyleOverride={
          MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalMoleculesPaginationPageNumberNormalStyle2
        }
        MOLECULESPaginationPageNumberNormalPageNumberStyle={
          MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalPageNumberStyle2
        }
        MOLECULESPaginationPageNumberNormalPageNumberStyle1={
          MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalPageNumberStyle1
        }
        MOLECULESPaginationPageNumberNormalPageNumberStyle2={
          MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalPageNumber1281StyleOverride
        }
        MOLECULESPaginationPageNumberNormalPageNumberStyle3={
          MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalPageNumberStyle
        }
        MOLECULESPaginationPageNumberNormalPageNumberStyleOverride={
          MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalDivStyleOverride
        }
        MOLECULESPaginationPageNumberNormalPageNumberWrapperStyle={
          MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalPageNumberWrapperStyle
        }
        MOLECULESPaginationPageNumberNormalPageNumberWrapperStyleOverride={
          MOLECULESPaginationPagesMoleculesPaginationPageNumberNormalMoleculesPaginationPageNumberNormalStyle3
        }
        MOLECULESPaginationPrevNormalMoleculesPaginationPrevNormalStyle={
          MOLECULESPaginationPagesMoleculesPaginationPrevNormalMoleculesPaginationPrevNormalStyle
        }
        pagesStyle={MOLECULESPaginationPagesPagesStyle}
        style={MOLECULESPaginationPagesMoleculesPaginationPagesStyle}
      />
      <div className={"MOLECULES-TABLE-PAGINATION-group"} style={groupStyle}>
        <p className={"MOLECULES-TABLE-PAGINATION-displaying-of-r"}>Displaying 5 of 50 Rows</p>
      </div>
      <MoleculesTablePaginationGoToPage style={MOLECULESTablePaginationGoToPageMoleculesTablePaginationGoToPageStyle} />
      <AtomsButtonsExtraSmallPrimarySplit
        ATOMSIconArrowChevronDownDefault="/img/atoms-icon-arrow-chevron-down-default-2.png"
        ATOMSIconArrowChevronDownDefaultStyle={{
          left: "59px",
        }}
        backgroundStyle={{
          width: "74px",
        }}
        loremStyle={ATOMSButtonsExtraSmallPrimarySplitLoremStyle}
        overlapGroupStyle={{
          width: "74px",
        }}
        rectangleStyle={{
          left: "54px",
        }}
        style={ATOMSButtonsExtraSmallPrimarySplitAtomsButtonsExtraSmallPrimarySplitStyle}
        text="Export"
      />
      <MoleculesInputsDropdownDefault
        ATOMSIconArrowChevronDownDefaultStyle={{
          left: "29px",
        }}
        overlapGroupStyle={{
          width: "unset",
        }}
        rectangle="/img/rectangle-7-7.png"
        rectangleStyle={{
          width: "49px",
        }}
        style={MOLECULESInputsDropdownDefaultMoleculesInputsDropdownDefaultStyle}
        text="5"
      />
    </div>
  );
};
