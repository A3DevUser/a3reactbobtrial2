import { combineReducers } from "redux";
import { getAccountData } from "./AccReducer";
import { getAccountSpData } from "./AccSpReducer";
import { getExcelData } from "./ExcelDataReducer";
import { getExcelSpData } from "./ExcelDataSpReducer";
import { selectedRowState } from "./SelectedRowRed";
import { getAccountDataId } from "./AccDataId";
import { getTestData } from "./TestDataReducer";
import { getOutputData } from "./OutputDataRed";
import { getOutputDataSlice } from "./OutputDataSliceRed";
import { SendOutputData } from "./SendOutputDataRed";
import { sendStatusDataRed } from "./UpdateStatusByAccRed";
import { getColumnData } from "./ColumnHeader";
import { OutputDataSetRed } from "./OutputDatasetRed";
// import { TrialAccApiRed } from "./TrialAccApiRed";
import { getTableAccountData } from "./TableAccData";
import { SubmitDataSetRed } from "./SubmitDataSetRed";
import { AuditTypeSetRed } from "./AuditTypeRed";
import { OutputDataFileSetRed } from "./OutputDataFileSetRed";
import { getUploadFilePostRed } from "./UploadFilePostRed";
import { partySheetNumRed } from "./PartySheetNumRed";
import { SubmitOutputDataRed } from "./SubmitOutputDataRed";
import { getModColumnData } from "./ModalColumnRed";
import { MainPartyDataRed } from "./MainPartyDataRed";
import { getModData } from "./ModDatared";
import { getDownloadFile } from "./DownloadFileRed";
import { OutputDataMainFileSetRed } from "./OutputDataMainFIleRed";
import { getDDData } from "./PartyDDRed";
import { getPartyHeaderData } from "./PartyHeaderRed";
import { getAreaData } from "./AreaRed";
import { getSchemeData } from "./SchemeRed";
import { getNewAccData } from "./NewAccRed";
import { AreaSchemeDateSetRed } from "./ASDRed";
import { SubmitAccDataRed } from "./SubmitAccDataRed";
import { saveAccDataRed } from "./SaveOutputDataRed";
import { getUserData } from "./UserDataRed";
import { saveUserIdRed } from "./SaveUserIdRed";
import {getApiData} from './ApiRepoRed'
import { getOutputId } from "./outputIdCountRed";

const rootReducer = combineReducers({
    getAccountData,
    getAccountSpData,
    getExcelData,
    getExcelSpData,
    selectedRowState,
    getAccountDataId,
    getTestData,
    getOutputData,
    getOutputDataSlice,
    SendOutputData,
    sendStatusDataRed,
    getColumnData,
    OutputDataSetRed,
    getTableAccountData,
    SubmitDataSetRed,
    AuditTypeSetRed,
    OutputDataFileSetRed,
    getUploadFilePostRed,
    partySheetNumRed,
    SubmitOutputDataRed,
    getModColumnData,
    MainPartyDataRed,
    getModData,
    getDownloadFile,
    OutputDataMainFileSetRed,
    getDDData,
    getPartyHeaderData,
    getAreaData,
    getSchemeData,
    getNewAccData,
    AreaSchemeDateSetRed,
    SubmitAccDataRed,
    saveAccDataRed,
    getUserData,
    saveUserIdRed,
    getApiData,
    getOutputId
})

export default rootReducer