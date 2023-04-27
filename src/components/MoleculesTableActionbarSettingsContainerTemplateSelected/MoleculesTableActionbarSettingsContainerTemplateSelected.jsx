import React from "react";
import { AtomsIconFilterSave } from "../AtomsIconFilterSave";
import { MoleculesInputsSearchDefault } from "../MoleculesInputsSearchDefault";
import { AtomsIconFilterClear } from "../AtomsIconFilterClear";
import { MoleculesInputsDropdownComplete } from "../MoleculesInputsDropdownComplete";
import { AtomsIcon2019Trash } from "../AtomsIcon2019Trash";
import "./style.css";

export const MoleculesTableActionbarSettingsContainerTemplateSelected = ({ style }) => {
  return (
    <div className={"MOLECULES-TABLE-ACTIONBAR-SETTINGS-CONTAINER-TEMPLATE-SELECTED-div"} style={style}>
      <div
        className={"MOLECULES-TABLE-ACTIONBAR-SETTINGS-CONTAINER-TEMPLATE-SELECTED-group"}
        style={{
          backgroundImage: "url(/img/shape-30.png)",
        }}
      />
      <div className={"MOLECULES-TABLE-ACTIONBAR-SETTINGS-CONTAINER-TEMPLATE-SELECTED-group-2"}>
        <div className={"MOLECULES-TABLE-ACTIONBAR-SETTINGS-CONTAINER-TEMPLATE-SELECTED-group-3"}>
          <MoleculesInputsDropdownComplete
            ATOMSIconArrowChevronDownDefault="/img/atoms-icon-arrow-chevron-down-default.png"
            overlapGroupStyle={{
              width: "unset",
            }}
            rectangle="/img/rectangle-7-2.png"
            style={{
              height: "32px",
              left: "0",
              position: "absolute",
              top: "0",
              width: "154px",
            }}
            text="Select Template"
          />
          <AtomsIconFilterSave
            path="/img/path-6.png"
            pathStyle={{
              height: "1px",
              left: "6px",
              top: "13px",
              width: "7px",
            }}
            rectangleStyle={{
              height: "4px",
              left: "4px",
              top: "1px",
              width: "3px",
            }}
            saveGridSettingsStyle={{
              backgroundImage: "url(/img/shape-95.png)",
              height: "18px",
              width: "unset",
            }}
            style={{
              height: "18px",
              left: "164px",
              position: "absolute",
              top: "7px",
              width: "18px",
            }}
          />
        </div>
        <AtomsIcon2019Trash
          ebeneStyle={{
            height: "18px",
          }}
          groupStyle={{
            height: "18px",
            left: "2px",
            width: "14px",
          }}
          groupStyleOverride={{
            height: "18px",
            width: "14px",
          }}
          overlapGroupStyle={{
            backgroundImage: "url(/img/shape-31.png)",
            height: "14px",
            left: "1px",
            top: "4px",
            width: "11px",
          }}
          rectangleStyle={{
            height: "7px",
            left: "3px",
            top: "3px",
          }}
          rectangleStyleOverride={{
            height: "7px",
            left: "7px",
            top: "3px",
          }}
          shape="/img/shape-32.png"
          shapeStyle={{
            height: "3px",
            width: "14px",
          }}
          style={{
            height: "18px",
            left: "202px",
            position: "absolute",
            top: "7px",
            width: "18px",
          }}
        />
      </div>
      <MoleculesInputsSearchDefault
        ATOMSIcon2019CommonSearchAtomsIconCommonSearchStyle={{
          height: "18px",
          left: "125px",
          position: "absolute",
          top: "6px",
          width: "18px",
        }}
        ATOMSIcon2019CommonSearchGroupStyle={{
          backgroundImage: "url(/img/shape-23.png)",
          height: "17px",
          top: "unset",
          width: "17px",
        }}
        overlapGroupStyle={{
          width: "unset",
        }}
        rectangle="/img/rectangle-7-2.png"
        style={{
          height: "32px",
          left: "349px",
          position: "absolute",
          top: "5px",
          width: "154px",
        }}
      />
      <AtomsIconFilterClear
        clearFiltersStyle={{
          backgroundImage: "url(/img/path-7.png)",
          height: "18px",
          width: "unset",
        }}
        shape="/img/shape-34.png"
        shapeStyle={{
          height: "8px",
          left: "9px",
          top: "9px",
          width: "8px",
        }}
        style={{
          height: "18px",
          left: "551px",
          position: "absolute",
          top: "12px",
          width: "18px",
        }}
      />
    </div>
  );
};
