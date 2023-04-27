import React, { useState,useEffect } from 'react';
import { MoleculesTableActionicontext } from "../../components/MoleculesTableActionicontext";
import { AtomsScrollbarHorizontal } from "../../components/AtomsScrollbarHorizontal";
import { AtomsStatusRed } from "../../components/AtomsStatusRed";
import { AtomsScrollbarVertical } from "../../components/AtomsScrollbarVertical";
import { MoleculesInputsSearchDefault } from "../../components/MoleculesInputsSearchDefault";
import { AtomsIconFilterClear } from "../../components/AtomsIconFilterClear";
import { MoleculesTableRowDefaultNew } from "../../components/MoleculesTableRowDefaultNew";
import { MoleculesTabSecondarySelected } from "../../components/MoleculesTabSecondarySelected";
import { MoleculesTableActionbarSettingsContainerTemplateSelected } from "../../components/MoleculesTableActionbarSettingsContainerTemplateSelected";
import { MoleculesFormCollapsibleLevel1 } from "../../components/MoleculesFormCollapsibleLevel1";
import { MoleculesTabSecondaryDefault } from "../../components/MoleculesTabSecondaryDefault";
import { AtomsIcon2019Settings } from "../../components/AtomsIcon2019Settings";
import { AtomsIconFilterSave } from "../../components/AtomsIconFilterSave";
import { MoleculesInputsDropdownDefault } from "../../components/MoleculesInputsDropdownDefault";
import { AtomsIcon2019CommonMenu } from "../../components/AtomsIcon2019CommonMenu";
import { AtomsStatusGreen } from "../../components/AtomsStatusGreen";
import { MoleculesTabPrimaryDefault } from "../../components/MoleculesTabPrimaryDefault";
import { AtomsIcon2019Notification } from "../../components/AtomsIcon2019Notification";
import { AtomsDividersLine1PxGray } from "../../components/AtomsDividersLine1PxGray";
import { AtomsTabDefault } from "../../components/AtomsTabDefault";
import { AtomsIcon2019Support } from "../../components/AtomsIcon2019Support";
import { OrganismsTabBar } from "../../components/OrganismsTabBar";
import { MoleculesTableHeaderDefaultLeftAlign } from "../../components/MoleculesTableHeaderDefaultLeftAlign";
import { MoleculesInputsDropdownComplete } from "../../components/MoleculesInputsDropdownComplete";
import { MoleculesTabPrimaryNotSelected } from "../../components/MoleculesTabPrimaryNotSelected";
import { MoleculesTableColumnheaderNew } from "../../components/MoleculesTableColumnheaderNew";
import { MoleculesTablePagination } from "../../components/MoleculesTablePagination";
import { AtomsIcon2019Edit } from "../../components/AtomsIcon2019Edit";
import { AtomsIcon2019SendMessage } from "../../components/AtomsIcon2019SendMessage";
import { AtomsButtonsSmallPrimaryDefault } from "../../components/AtomsButtonsSmallPrimaryDefault";
import { MoleculesTableRowStateSelected } from "../../components/MoleculesTableRowStateSelected";
import { AtomsContentcontainerWrapper } from "../../components/AtomsContentcontainerWrapper";
import { AtomsInputsCheckboxNormal } from "../../components/AtomsInputsCheckboxNormal";
import { AtomsIcon2019Trash } from "../../components/AtomsIcon2019Trash";
import { AtomsIcon2019CommonSearch } from "../../components/AtomsIcon2019CommonSearch";
import { DataGrid,ColDef } from '@material-ui/data-grid';
import "./style.css";
import { getData } from './getData';

export const ManageSolutionsScreen = () => {

  const [isDivVisible, setIsDivVisible] = useState(true);

  const toggleDivVisibility = () => {
    setIsDivVisible(!isDivVisible);
  };

  const iconUrl = isDivVisible
    ? "/img/atoms-icon-2019-common-cta-caret-copy-12.png" // use this icon when the container is collapsed
    : "/img/atoms-icon-2019-cta-caret-copy.png"; // use this icon when the container is expanded

  // Data loading from json file into table

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //   getData().then((data) => setData(data));
    // }, []);

    const [selectedRows, setSelectedRows] = useState([]);

    const handleSelectionChange = (newSelection) => {
      setSelectedRows(newSelection.selectionModel);
    };

    const columns = [
  { field: 'id', headerName: 'ParentID', width: 150 },
  {
    field: 'solnName',
    headerName: 'Solution name',
    width: 150,
    sortable: true,
  },
  {
    field: 'projNbr',
    headerName: 'SPM Project Number',
    width: 150,
    sortable: true,
  },
  {
    field: 'region',
    headerName: 'Region',
    type: 'number',
    width: 120,
    sortable: true,
  },
  {
    field: 'market',
    headerName: 'Market',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 160,
   
  },
  {
    field: 'rfe',
    headerName: 'RFE',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 160,
   
  },
  {
    field: 'source',
    headerName: 'Source',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 160,
   
  },
  {
    field: 'solnType',
    headerName: 'Solution Type',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 160,
   
  },
  {
    field: 'releaseFlag',
    headerName: 'Release Flag',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 160,
   
  }
    ];
      
    const rows = [
  { "id": 732481, "solnName": "AWS", "projNbr": 273627, "region": 35, "market":"", "rfe":"", "source":"MPT", "solnType":"MCR", "releaseFlag":"No"},
  { "id": 732482, "solnName": "AWS", "projNbr": 273627, "region": 35, "market":"", "rfe":"", "source":"MPT", "solnType":"MCR", "releaseFlag":"No"},
  { "id": 732483, "solnName": "AWS", "projNbr": 273627, "region": 35, "market":"", "rfe":"", "source":"MPT", "solnType":"MCR", "releaseFlag":"No"},
  { "id": 732484, "solnName": "AWS", "projNbr": 273627, "region": 35, "market":"", "rfe":"", "source":"MPT", "solnType":"MCR", "releaseFlag":"No"},
  { "id": 732485, "solnName": "AWS", "projNbr": 273627, "region": 35, "market":"", "rfe":"", "source":"MPT", "solnType":"MCR", "releaseFlag":"No"},
  { "id": 732486, "solnName": "AWS", "projNbr": 273627, "region": 35, "market":"", "rfe":"", "source":"MPT", "solnType":"MCR", "releaseFlag":"No"},
  { "id": 732487, "solnName": "AWS", "projNbr": 273627, "region": 35, "market":"", "rfe":"", "source":"MPT", "solnType":"MCR", "releaseFlag":"No"},
  { "id": 732488, "solnName": "AWS", "projNbr": 273627, "region": 35, "market":"", "rfe":"", "source":"MPT", "solnType":"MCR", "releaseFlag":"No"},
  { "id": 732489, "solnName": "AWS", "projNbr": 273627, "region": 35, "market":"", "rfe":"", "source":"MPT", "solnType":"MCR", "releaseFlag":"No"},
  { "id": 732490, "solnName": "AWS", "projNbr": 273627, "region": 35, "market":"", "rfe":"", "source":"MPT", "solnType":"MCR", "releaseFlag":"No"},
  { "id": 732491, "solnName": "AWS", "projNbr": 273627, "region": 35, "market":"", "rfe":"", "source":"MPT", "solnType":"MCR", "releaseFlag":"No"},
  { "id": 732492, "solnName": "AWS", "projNbr": 273627, "region": 35, "market":"", "rfe":"", "source":"MPT", "solnType":"MCR", "releaseFlag":"No"},
  { "id": 732493, "solnName": "AWS", "projNbr": 273627, "region": 35, "market":"", "rfe":"", "source":"MPT", "solnType":"MCR", "releaseFlag":"No"},
  { "id": 732494, "solnName": "AWS", "projNbr": 273627, "region": 35, "market":"", "rfe":"", "source":"MPT", "solnType":"MCR", "releaseFlag":"No"},
    ];

    const getRowClassName = (params) => {
    return 'custom-row'; // add a custom class to the row
  };
  
  return (
    <div className={"manage-solutions-screen-manage-solutions-wrapper"}>
      <div className={"manage-solutions-screen-manage-solutions"}>
        <div className={"manage-solutions-screen-ORGANISMS-GLOBALHEADER-TAB-BAR"}>
          <div className={"manage-solutions-screen-overlap"}>
            <div className={"manage-solutions-screen-ORGANISMS-GLOBALHEADER-DEFAULT"}>
              <div className={"manage-solutions-screen-overlap-group2"}>
                <AtomsIcon2019CommonMenu
                  ebeneStyle={{
                    width: "24px",
                  }}
                  groupStyle={{
                    width: "unset",
                  }}
                  groupStyleOverride={{
                    width: "unset",
                  }}
                  style={{
                    height: "24px",
                    left: "21px",
                    position: "absolute",
                    top: "19px",
                    width: "24px",
                  }}
                />
                <div className={"manage-solutions-screen-MOLECULES-FORM-SEARCH"}>
                  <div className={"manage-solutions-screen-div"}>
                    <AtomsIcon2019CommonSearch
                      groupStyle={{
                        backgroundImage: "url(/img/shape-23.png)",
                        height: "17px",
                        top: "unset",
                        width: "17px",
                      }}
                      style={{
                        height: "18px",
                        left: "194px",
                        position: "absolute",
                        top: "6px",
                        width: "18px",
                      }}
                    />
                    <input className={"manage-solutions-screen-search"} placeholder='Search' />
                    <img className={"manage-solutions-screen-rectangle"} src={"/img/rectangle-7.png"} />
                  </div>
                </div>
                <AtomsIcon2019Notification
                  style={{
                    height: "24px",
                    left: "849px",
                    position: "absolute",
                    top: "19px",
                    width: "24px",
                  }}
                />
                <div
                  className={"manage-solutions-screen-ATOMS-AVATAR-DEFAULT"}
                  style={{
                    backgroundImage: "url(/img/combined-shape.png)",
                  }}
                />
                <AtomsIcon2019Support
                  style={{
                    height: "24px",
                    left: "893px",
                    position: "absolute",
                    top: "19px",
                    width: "24px",
                  }}
                />
                <div className={"manage-solutions-screen-canvaslogo-final"}>
                  <div className={"manage-solutions-screen-overlap-group1"}>
                    <img className={"manage-solutions-screen-img"} src={"/img/path-1.png"} />
                    <div className={"manage-solutions-screen-group"}>
                      <img className={"manage-solutions-screen-path"} src={"/img/path-2.png"} />
                      <img className={"manage-solutions-screen-shape"} src={"/img/shape-25.png"} />
                      <img className={"manage-solutions-screen-path-2"} src={"/img/path-3.png"} />
                      <div className={"manage-solutions-screen-overlap-group"}>
                        <img className={"manage-solutions-screen-path-3"} src={"/img/path-4.png"} />
                        <img className={"manage-solutions-screen-shape-2"} src={"/img/shape-26.png"} />
                      </div>
                      <img className={"manage-solutions-screen-path-4"} src={"/img/path-5.png"} />
                    </div>
                  </div>
                </div>
                <img className={"manage-solutions-screen-download"} src={"/img/download.png"} />
              </div>
            </div>
            <OrganismsTabBar
              MOLECULESTabTabar1={
                <AtomsTabDefault
                  override={
                    <MoleculesTabPrimaryDefault
                      COMPONENTTabHorizontalSelectedStyle={{
                        top: "1px",
                      }}
                      itemNameStyle={{
                        top: "5px",
                      }}
                      style={{
                        height: "24px",
                        left: "0",
                        position: "absolute",
                        top: "0",
                        width: "57px",
                      }}
                      text="Manage Solutions"
                    />
                  }
                  style={{
                    height: "24px",
                    width: "73px",
                  }}
                />
              }
              override={
                <MoleculesTabPrimaryNotSelected
                  itemNameStyle={{
                    top: "5px",
                  }}
                  style={{
                    height: "24px",
                    left: "0",
                    position: "absolute",
                    top: "0",
                    width: "38px",
                  }}
                  text="Home"
                />
              }
              style={{
                height: "39px",
                left: "0",
                position: "absolute",
                top: "50px",
                width: "1024px",
              }}
            />
          </div>
        </div>
        <div className={"manage-solutions-screen-group-8"}>
          <div className={"manage-solutions-screen-div-2"}>
            <a onClick={toggleDivVisibility}>
            <div className={"manage-solutions-screen-group-copy"}>
              <MoleculesFormCollapsibleLevel1
                MOLECULESCollapsibleTitleLevel12ClosedAtomsIconCtaCaretCopy={iconUrl}
                MOLECULESCollapsibleTitleLevel12ClosedText="Search"
                style={{
                  height: "40px",
                  width: "unset",
                }}
              />
            </div>
            </a>
            <AtomsIcon2019Settings
              style={{
                height: "24px",
                left: "970px",
                position: "absolute",
                top: "9px",
                width: "24px",
              }}
            />
          </div>
           
           <div style={{ display: isDivVisible ? 'block' : 'none' }} className={"manage-solutions-screen-overlap-group23"}>
            <AtomsDividersLine1PxGray
              rectangleStyle={{
                width: "unset",
              }}
              style={{
                backgroundColor: "unset",
                height: "3px",
                left: "1px",
                position: "absolute",
                top: "0",
                width: "1004px",
              }}
            />
           
            <div className={"manage-solutions-screen-MOLECULES-INPUTS-DROPDOWN-LABELED-COMPLETE-copy"}>
              <div className={"manage-solutions-screen-overlap-3"}>
                <img
                  className={"manage-solutions-screen-ATOMS-ICON-ARROW-CHEVRON-DOWN-DEFAULT"}
                  src={"/img/atoms-icon-arrow-chevron-down-default-4.png"}
                />
                <MoleculesInputsDropdownComplete
                  ATOMSIconArrowChevronDownDefault="/img/atoms-icon-arrow-chevron-down-default-6.png"
                  ATOMSIconArrowChevronDownDefaultStyle={{
                    left: "207px",
                  }}
                  overlapGroupStyle={{
                    width: "unset",
                  }}
                  rectangle="/img/rectangle-7-9.png"
                  rectangleStyle={{
                    width: "227px",
                  }}
                  style={{
                    height: "32px",
                    left: "0",
                    position: "absolute",
                    top: "0",
                    width: "227px",
                  }}
                  text="Select"
                />
              </div>
              <div className={"manage-solutions-screen-ATOMS-FORMS-LABEL"}>
                <div className={"manage-solutions-screen-label"}>Load Saved Search</div>
              </div>
            </div>
            <div className={"manage-solutions-screen-MOLECULES-INPUTS-DROPDOWN-LABELED-COMPLETE-copy-2"}>
              <div className={"manage-solutions-screen-overlap-4"}>
                <img
                  className={"manage-solutions-screen-ATOMS-ICON-ARROW-CHEVRON-DOWN-DEFAULT-2"}
                  src={"/img/atoms-icon-arrow-chevron-down-default-6.png"}
                />
                <MoleculesInputsDropdownComplete
                  ATOMSIconArrowChevronDownDefault="/img/atoms-icon-arrow-chevron-down-default-6.png"
                  ATOMSIconArrowChevronDownDefaultStyle={{
                    left: "207px",
                  }}
                  overlapGroupStyle={{
                    width: "unset",
                  }}
                  rectangle="/img/rectangle-7-9.png"
                  rectangleStyle={{
                    width: "227px",
                  }}
                  style={{
                    height: "32px",
                    left: "0",
                    position: "absolute",
                    top: "0",
                    width: "227px",
                  }}
                  text="All Rationales"
                />
              </div>
              <div className={"manage-solutions-screen-label-wrapper"}>
                <div className={"manage-solutions-screen-label"}> Primary Rationale</div>
              </div>
            </div>
            <div className={"manage-solutions-screen-MOLECULES-INPUTS-DROPDOWN-LABELED-COMPLETE-copy-3"}>
              <div className={"manage-solutions-screen-overlap-5"}>
                <img
                  className={"manage-solutions-screen-ATOMS-ICON-ARROW-CHEVRON-DOWN-DEFAULT-3"}
                  src={"/img/atoms-icon-arrow-chevron-down-default-4.png"}
                />
                <MoleculesInputsDropdownComplete
                  ATOMSIconArrowChevronDownDefault="/img/atoms-icon-arrow-chevron-down-default-4.png"
                  overlapGroupStyle={{
                    width: "unset",
                  }}
                  rectangle="/img/rectangle-7-10.png"
                  style={{
                    height: "32px",
                    left: "0",
                    position: "absolute",
                    top: "0",
                    width: "154px",
                  }}
                  text="West"
                />
              </div>
              <div className={"manage-solutions-screen-ATOMS-FORMS-LABEL-2"}>
                <div className={"manage-solutions-screen-label"}>Territory</div>
              </div>
            </div>
            <div className={"manage-solutions-screen-MOLECULES-INPUTS-DROPDOWN-LABELED-COMPLETE-copy-4"}>
              <div className={"manage-solutions-screen-overlap-5"}>
                <img
                  className={"manage-solutions-screen-ATOMS-ICON-ARROW-CHEVRON-DOWN-DEFAULT-3"}
                  src={"/img/atoms-icon-arrow-chevron-down-default-4.png"}
                />
                <MoleculesInputsDropdownComplete
                  ATOMSIconArrowChevronDownDefault="/img/atoms-icon-arrow-chevron-down-default-4.png"
                  overlapGroupStyle={{
                    width: "unset",
                  }}
                  rectangle="/img/rectangle-7-10.png"
                  style={{
                    height: "32px",
                    left: "0",
                    position: "absolute",
                    top: "0",
                    width: "154px",
                  }}
                  text="Illinois"
                />
              </div>
              <div className={"manage-solutions-screen-ATOMS-FORMS-LABEL-2"}>
                <div className={"manage-solutions-screen-label"}>Region</div>
              </div>
            </div>
            <div className={"manage-solutions-screen-MOLECULES-INPUTS-DROPDOWN-LABELED-COMPLETE-copy-5"}>
              <div className={"manage-solutions-screen-overlap-5"}>
                <img
                  className={"manage-solutions-screen-ATOMS-ICON-ARROW-CHEVRON-DOWN-DEFAULT-3"}
                  src={"/img/atoms-icon-arrow-chevron-down-default-4.png"}
                />
                <MoleculesInputsDropdownComplete
                  ATOMSIconArrowChevronDownDefault="/img/atoms-icon-arrow-chevron-down-default-4.png"
                  overlapGroupStyle={{
                    width: "unset",
                  }}
                  rectangle="/img/rectangle-7-10.png"
                  style={{
                    height: "32px",
                    left: "0",
                    position: "absolute",
                    top: "0",
                    width: "154px",
                  }}
                  text="All Markets"
                />
              </div>
              <div className={"manage-solutions-screen-ATOMS-FORMS-LABEL-2"}>
                <div className={"manage-solutions-screen-label"}>Market</div>
              </div>
            </div>
            <div className={"manage-solutions-screen-MOLECULES-INPUTS-DROPDOWN-LABELED-COMPLETE-copy-6"}>
              <div className={"manage-solutions-screen-overlap-5"}>
                <img
                  className={"manage-solutions-screen-ATOMS-ICON-ARROW-CHEVRON-DOWN-DEFAULT-3"}
                  src={"/img/atoms-icon-arrow-chevron-down-default-4.png"}
                />
                <MoleculesInputsDropdownComplete
                  ATOMSIconArrowChevronDownDefault="/img/atoms-icon-arrow-chevron-down-default-4.png"
                  overlapGroupStyle={{
                    width: "unset",
                  }}
                  rectangle="/img/rectangle-7-10.png"
                  style={{
                    height: "32px",
                    left: "0",
                    position: "absolute",
                    top: "0",
                    width: "154px",
                  }}
                  text="Upper Midwest"
                />
              </div>
              <div className={"manage-solutions-screen-ATOMS-FORMS-LABEL-2"}>
                <div className={"manage-solutions-screen-label"}>Area</div>
              </div>
            </div>
            <div className={"manage-solutions-screen-MOLECULES-INPUTS-DROPDOWN-LABELED-COMPLETE-copy-7"}>
              <div className={"manage-solutions-screen-overlap-5"}>
                <img
                  className={"manage-solutions-screen-ATOMS-ICON-ARROW-CHEVRON-DOWN-DEFAULT-3"}
                  src={"/img/atoms-icon-arrow-chevron-down-default-6.png"}
                />
                <MoleculesInputsDropdownComplete
                  ATOMSIconArrowChevronDownDefault="/img/atoms-icon-arrow-chevron-down-default-6.png"
                  overlapGroupStyle={{
                    width: "unset",
                  }}
                  rectangle="/img/rectangle-7-14.png"
                  style={{
                    height: "32px",
                    left: "0",
                    position: "absolute",
                    top: "0",
                    width: "154px",
                  }}
                  text="All Types"
                />
              </div>
              <div className={"manage-solutions-screen-ATOMS-FORMS-LABEL-2"}>
                <div className={"manage-solutions-screen-label"}>Solution Type</div>
              </div>
            </div>
            <div className={"manage-solutions-screen-MOLECULES-INPUTS-DROPDOWN-LABELED-COMPLETE-copy-8"}>
              <div className={"manage-solutions-screen-overlap-5"}>
                <img
                  className={"manage-solutions-screen-ATOMS-ICON-ARROW-CHEVRON-DOWN-DEFAULT-3"}
                  src={"/img/atoms-icon-arrow-chevron-down-default-6.png"}
                />
                <MoleculesInputsDropdownComplete
                  ATOMSIconArrowChevronDownDefault="/img/atoms-icon-arrow-chevron-down-default-6.png"
                  overlapGroupStyle={{
                    width: "unset",
                  }}
                  rectangle="/img/rectangle-7-14.png"
                  style={{
                    height: "32px",
                    left: "0",
                    position: "absolute",
                    top: "0",
                    width: "154px",
                  }}
                  text="All Years"
                />
              </div>
              <div className={"manage-solutions-screen-ATOMS-FORMS-LABEL-2"}>
                <div className={"manage-solutions-screen-label"}>POR</div>
              </div>
            </div>
            <div className={"manage-solutions-screen-MOLECULES-INPUTS-DROPDOWN-LABELED-COMPLETE-copy-9"}>
              <div className={"manage-solutions-screen-overlap-5"}>
                <img
                  className={"manage-solutions-screen-ATOMS-ICON-ARROW-CHEVRON-DOWN-DEFAULT-3"}
                  src={"/img/atoms-icon-arrow-chevron-down-default-6.png"}
                />
                <MoleculesInputsDropdownComplete
                  ATOMSIconArrowChevronDownDefault="/img/atoms-icon-arrow-chevron-down-default-6.png"
                  overlapGroupStyle={{
                    width: "unset",
                  }}
                  rectangle="/img/rectangle-7-14.png"
                  style={{
                    height: "32px",
                    left: "0",
                    position: "absolute",
                    top: "0",
                    width: "154px",
                  }}
                  text="All Types"
                />
              </div>
              <div className={"manage-solutions-screen-ATOMS-FORMS-LABEL-2"}>
                <div className={"manage-solutions-screen-label"}>Technology Type</div>
              </div>
            </div>

            <div className={"manage-solutions-screen-MOLECULES-INPUTS-DROPDOWN-LABELED-COMPLETE-copy-10"}>
              <div className={"manage-solutions-screen-overlap-5"}>
                <img
                  className={"manage-solutions-screen-ATOMS-ICON-ARROW-CHEVRON-DOWN-DEFAULT-3"}
                  src={"/img/atoms-icon-arrow-chevron-down-default-6.png"}
                />
                <MoleculesInputsDropdownComplete
                  ATOMSIconArrowChevronDownDefault="/img/atoms-icon-arrow-chevron-down-default-6.png"
                  overlapGroupStyle={{
                    width: "unset",
                  }}
                  rectangle="/img/rectangle-7-14.png"
                  style={{
                    height: "32px",
                    left: "0",
                    position: "absolute",
                    top: "0",
                    width: "154px",
                  }}
                  text="All Years"
                />
              </div>
              <div className={"manage-solutions-screen-ATOMS-FORMS-LABEL-2"}>
                <div className={"manage-solutions-screen-label"}>Build plan</div>
              </div>
            </div>
           
            <AtomsButtonsSmallPrimaryDefault
              loremStyle={{
                left: "28px",
              }}
              overlapGroupStyle={{
                width: "92px",
              }}
              style={{
                backgroundColor: "unset",
                height: "28px",
                left: "12px",
                position: "absolute",
                top: "156px",
                width: "90px",
              }}
              text="Search"
            />

            <div className={"manage-solutions-screen-ATOMS-BUTTONS-SMALL-SECONDARY-DEFAULT-copy"}>
              <div className={"manage-solutions-screen-lorem"}>Clear</div>
            </div>
            <div className={"manage-solutions-screen-lorem-wrapper"}>
              <div className={"manage-solutions-screen-lorem-2"}>Save Search</div>
            </div>
          </div>
          
        </div>
        <div className={"manage-solutions-screen-overlap-group29"}>
          <MoleculesFormCollapsibleLevel1
            MOLECULESCollapsibleTitleLevel12ClosedAtomsIconCtaCaretCopy="/img/atoms-icon-2019-common-cta-caret-copy-12.png"
            MOLECULESCollapsibleTitleLevel12ClosedText="List of Solutions (83)"
            overlapGroupStyle={{
              width: "unset",
            }}
            style={{
              height: "40px",
              left: "0",
              position: "absolute",
              top: "0",
              width: "1004px",
            }}
          />
          <div className={"manage-solutions-screen-secondary-tab"}>
            <div className={"manage-solutions-screen-overlap-2"}>
              <AtomsContentcontainerWrapper
                rectangleStyle={{
                  height: "43px",
                  width: "1006px",
                }}
                style={{
                  height: "41px",
                  left: "0",
                  position: "absolute",
                  top: "0",
                  width: "1004px",
                }}
              />
              <MoleculesTabSecondaryDefault
                itemNameStyle={{
                  left: "-1px",
                }}
                style={{
                  backgroundColor: "unset",
                  height: "21px",
                  left: "109px",
                  position: "absolute",
                  top: "10px",
                  width: "68px",
                }}
                text="Favourites"
              />
              <MoleculesTabSecondarySelected
                style={{
                  backgroundColor: "unset",
                  height: "21px",
                  left: "10px",
                  position: "absolute",
                  top: "10px",
                  width: "79px",
                }}
                text="All Solutions"
              />
              <div className={"manage-solutions-screen-ATOMS-DIVIDERS-LINE-BLACK"} />
            </div>
          </div>
        </div>
        <div className={"manage-solutions-screen-overlap-group28"}>

          <MoleculesInputsSearchDefault
            ATOMSIcon2019CommonSearchAtomsIconCommonSearchStyle={{
              height: "18px",
              left: "175px",
              position: "absolute",
              top: "6px",
              width: "18px",
            }}
            ATOMSIcon2019CommonSearchGroupStyle={{
              backgroundImage: "url(/img/shape-27.png)",
              height: "17px",
              top: "unset",
              width: "17px",
            }}
            overlapGroupStyle={{
              width: "unset",
            }}
            rectangle="/img/rectangle-7-1.png"
            rectangleStyle={{
              width: "204px",
            }}
            style={{
              height: "32px",
              left: "716px",
              position: "absolute",
              top: "7px",
              width: "204px",
            }}
          />
          <div className={"manage-solutions-screen-MOLECULES-TABLE-ACTIONBAR"}>
            <div className={"manage-solutions-screen-MOLECULES-TABLE-ACTIONICONS"}>
              <div className={"manage-solutions-screen-MOLECULES-TABLE-ACTIONICONTEXT"}>
              <span class="material-symbols-outlined">edit</span>
                <div className={"manage-solutions-screen-edit"}>Edit</div>
              </div>
              <MoleculesTableActionicontext
                override={
                  <AtomsIcon2019Edit
                    style={{
                      height: "24px",
                      left: "0",
                      position: "absolute",
                      top: "0",
                      width: "24px",
                    }}
                  />
                }
                style={{
                  height: "24px",
                  left: "89px",
                  position: "absolute",
                  top: "0",
                  width: "77px",
                }}
                text="Release"
              />
              <MoleculesTableActionicontext
                override={
                  <AtomsIcon2019Trash
                    shape="/img/shape-29.png"
                    style={{
                      height: "24px",
                      left: "0",
                      position: "absolute",
                      top: "0",
                      width: "24px",
                    }}
                  />
                }
                style={{
                  height: "24px",
                  left: "178px",
                  position: "absolute",
                  top: "0",
                  width: "77px",
                }}
                text="Reject"
              />
<div className={"manage-solutions-screen-ATOMS-ICON-more-horizontal-copy"}>
<span class="material-symbols-outlined">
more_vert
</span>
</div>

              {/* <img
                className={"manage-solutions-screen-ATOMS-ICON-more-horizontal-copy"}
                src={"/img/atoms-icon-2019-more-horizontal.png"}
              /> */}
            </div>
            <MoleculesTableActionbarSettingsContainerTemplateSelected
              style={{
                height: "42px",
                left: "415px",
                position: "absolute",
                top: "0",
                width: "589px",
              }}
            />
          </div>
          <div style={{ height: 365, width: '99%', background:'#fff',position:'relative', top:'45px', left:'5px' }}>
          <DataGrid rows={rows} columns={columns} pageSize={10}  
          getRowClassName={(params) => params.index % 2 === 0 ? "custom-row-even" : "custom-row-odd"}
          checkboxSelection onSelectionModelChange={handleSelectionChange} selectionModel={selectedRows}/>
          </div>

        </div>
     
        
      </div>
      
    </div>
  );
};
