import React,{ useState,useEffect, useRef } from 'react'
import { useHistory, useLocation,useParams, withRouter } from 'react-router-dom';
import PartyEditableRows from './PartyEditableRows';
import axios from 'axios'
import NavbarParty from './NavbarParty';
import PartyHeader from './PartyHeader';
import PartyStatic from './PartyStatic';
import { PartyTableStyles } from './PartyTableStyles';
import './PartyTableStyles.css';
import Select from 'react-select';
import { useFilters } from 'react-table';
import LandingPage from './LandingPage';
import DividePartySheets from './DividePartySheets';
import {
    Link,Route
  } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccDataId } from '../actions/AccountData';
import { fetchTestData } from '../actions/TestData';
import { fetchOutputData } from '../actions/OutputData';
import { fetchOutputDataSlice } from '../actions/OutputdataSlice';
import { PutOutputData } from '../actions/OutputDataPut';
import { sendStatusData } from '../actions/UpdateStatusByAcc';
import { OutputDataSetter } from '../actions/OutputDataSetter';
import Table from './Table';
import COLUMN from'./ColumnData.json'
import { fetchColData } from '../actions/ColumnHeader';
import { fetchTableAccData, restTableAccountData } from '../actions/AccountDataTable';
import { fetchDDData } from '../actions/PartyDDAct';
import { fetchPartyHeaderData } from '../actions/PartyHeaderAct';
import { fetchApiData } from '../actions/ApiRepoAction';

const PartySheetsInput = (props) => {
    const location = useLocation()
    // const{ testDet, acctDet } = location.state;

    const[allAcc,setallAcc]=useState([...location.state.accountsData.split(',').sort()])
    const[userId,setUserId] = useState(location.state.userId);
    // const[tests,setTests] = useState([]);
    const[accounts,setAccounts] = useState([]);
    const[sheetAccounts,setSheetAccounts] = useState([]);
    const[saveData,setSaveData] = useState([]);
    const[auditId,setAuditId] = useState(location.state.auditId);
    const[schemeCode,setSchemeCode] = useState(location.state.schemeCode);
    // const[finalAccountData,setFinalAccountData] = useState([]);
    const[outputId,setOutputId] = useState([]);
    const[outputData,setOutputData] = useState([]);
    const[initialData,setInitialData] = useState([]);
    const[resChanged,setResChanged] = useState(0);
    const[accountDataChange,setAccountDataChange] = useState(0)
    const[isSubmit,setIsSubmit] = useState(location.state.accountsData.split(',').length/location.state.sheetId <= 10? true:false)
    const[isFailed,setIsFailed] = useState(false);
    const[generatedSheetDetails,setGeneratedSheetDetails] = useState([]);
    const[accountResponseCount,setAccountResponseCount] = useState([]);
    const[isSaved,setIsSaved] = useState();
    const[oplist,setoplist]=useState();
    const[pOplist,setpOplist]=useState();
    const[sOplist,setsOplist]=useState();
    const[ttOplist,setttOplist]=useState();
    const[mainSearchTerm,setmainSearchTerm]=useState(null)
    const[pSearchTerm,setpSearchTerm]=useState(null);
    const[sheetLimit,setSheetLimit] = useState(10);
    const[selectedValue,setselectedValue]=useState();
    const [opData,setopData]=useState()
    const [allOpId,setallOpId]=useState([])
    // const [newHead,setnewHead]=useState([])
    const selectSheet = useRef();
    const pSearchVal=useRef();
    const history = useHistory();
    const dispatch = useDispatch()

    const getAccountDataId = useSelector((state)=>state.getAccountDataId)
    const getTestData = useSelector((state)=>state.getTestData)
    const getOutputData = useSelector((state)=>state.getOutputData)
    const getOutputDataSlice = useSelector((state)=>state.getOutputDataSlice)
    const SendOutputData = useSelector((state)=>state.SendOutputData)
    const OutputDataSetRed = useSelector((state)=>state.OutputDataSetRed)
    const getColumnData =  useSelector((state)=>state.getColumnData)
    const getTableAccountData = useSelector((state)=>state.getTableAccountData)
    const AuditTypeSetRed = useSelector((state)=>state.AuditTypeSetRed)
    const getDDData = useSelector((state)=>state.getDDData)
    const getPartyHeaderData = useSelector((state)=>state.getPartyHeaderData)
    const AreaSchemeDateSetRed = useSelector((state)=>state.AreaSchemeDateSetRed)
    const getApiData = useSelector((state)=>state.getApiData)



    // var sheetCounter = [];
    // var sheetId = location.state.sheetId;

    const setSheets = () => {
    //     var len = allAcc.length
    //     if(len <= sheetLimit)
    //     {
    //         sheetCounter.push(1)
    //     }
    //     else{
    //         var counter = 1;
    //     for(var i = 0; i <= len;i = i + sheetLimit)
    //     {
    //         if((i + sheetLimit) <= len)
    //         {
    //             sheetCounter.push(counter)
                
    //             counter = counter + 1;
    //         }
    //         else if((i + sheetLimit) > len)
    //         {
    //             sheetCounter.push(counter) 
    //         }
    //     }
    // }
    //     sheetCounter.map((sh) => {
    //         setGeneratedSheetDetails(generatedSheetDetails => [...generatedSheetDetails,sh])
            
    //     })
    let newArr=[]
    let finalSheet;

    finalSheet = Math.ceil(allAcc.length/10)
    for (let index = 1; index <= finalSheet; index++) {
        newArr.push(index)        
    }
    setGeneratedSheetDetails(newArr)

    }

    // const setAccountsId = () => {
    //     setAccounts(allAcc.slice(((location.state.sheetId - 1) * 10),(location.state.sheetId *10)))
    //      }

        // useEffect(()=>{
        //     setAccounts(allAcc.slice(((sheetId - 1) * 10),(sheetId *10)))
        // },[location.state.sheetId])
         

    // const setAccountsData = async() => {
    //     dispatch(fetchAccDataId(accounts,AuditTypeSetRed.auditType))
    //      }


        //  useEffect(()=>{
        //     setFinalAccountData(getAccountDataId.val)
        //  },[getAccountDataId])

    // const setTestData = () => {
    //             // setAccountDataChange(accountDataChange + 1)
    //         dispatch(fetchTestData(schemeCode,auditId))
    // }

    // var opId;
    useEffect(() => {
        // opId = outputId.slice(0,(finalAccountData.length * tests.length))
        // if(outputId.length === (finalAccountData.length * tests.length) && outputId.length > 0)
        // {  
            // console.log(opId)
            // finalAccountData.length * tests.length <= 2000 ? 
            if(outputId.length > 0){
                dispatch(fetchOutputData(outputId))
            }
            // dispatch(fetchOutputData(outputId)) 

            // : dispatch(fetchOutputDataSlice(outputId))
        // }
    },[outputId])


    // useEffect(()=>{
    //     if(getTestData.val.length >0){
    //         setTests(getTestData.val)
    //     }
    // },[getTestData])

    // useEffect(()=>{
    //     setOutputData(getOutputDataSlice.val)
    // },[getOutputDataSlice])

    // useEffect(()=>{
    //     setOutputData(getOutputData.val)
    // },[getOutputData])


    useEffect(() => {
        if(((getTestData.val.length > 0)&&(getTableAccountData.val.length >0))&&accounts.includes(getTableAccountData.val[0].id))
        {
            getTableAccountData.val.map((acc) => {
                getTestData.val.map((test) => {
                    setOutputId(outputId => [...outputId, auditId+ test.testRef + acc.id+acc.cunDate])
                    // setOutputId([...outputId, test.testRef + acc.id])
                })
            })
        }
        // console.log(getTableAccountData)

        // if(getTestData.val.length > 0)
        // {
        //     allAcc.map((acc) => {
        //         getTestData.val.map((test) => {
        //             setallOpId(outputId => [...outputId, auditId+ test.testRef + acc.id+acc.cunDate])
        //             // setOutputId([...outputId, test.testRef + acc.id])
        //         })
        //     })
        // }
    },[getTestData,getTableAccountData])



    
    // },[accountDataChange])

    // useEffect(() => {
    //     if(outputData.length > 0){
    //     setAccountResponseCount(...accountResponseCount,findOcc(outputData,'accountId'))
    //     }
    // },[outputData])

    window.onbeforeunload = function() { 
        window.setTimeout(function () { 
            window.location = `/?AuditId=${auditId}&UserId=${userId}&auditType=${AuditTypeSetRed.auditType}`;
        }, 0); 
        window.onbeforeunload = null; // necessary to prevent infinite loop, that kills your browser 
    }

    useEffect(() => {
        if(accounts.length > 0){

        // setAccountsData();
        // dispatch(fetchAccDataId(accounts,AuditTypeSetRed.auditType))
        // dispatch(fetchTableAccData(accounts,AuditTypeSetRed.auditType))
        // console.log(accounts)
        dispatch(fetchApiData('fetch',AreaSchemeDateSetRed.area,'Form-102','',AuditTypeSetRed.solId,AreaSchemeDateSetRed.currDate,accounts,AuditTypeSetRed.auditType,'',AreaSchemeDateSetRed.currDate2,AreaSchemeDateSetRed.schemeCode,auditId))

        // setTestData();
        setGeneratedSheetDetails([])
        setSheets();
        }
        // if(accounts.length > 0){
        //     setGeneratedSheetDetails([])
        //     setSheets();
        //     }
            // dispatch(fetchTableAccData(accounts,AuditTypeSetRed.auditType))
        },[accounts])

    // useEffect(() => {
    //         if(accounts.length > 0){
    //         setSheets();
    //         }
    //     },[accounts])

    useEffect(() => {
            // setIsSubmit(location.state.accountsData.split(',').length/location.state.sheetId <= 10? true:false);
            setOutputId([])
            // setOutputData([])
            // setAccountsId();
            setAccounts(allAcc.slice(((location.state.sheetId - 1) * 10),(location.state.sheetId *10)))
            // setAccountResponseCount([])
            // setFinalAccountData([])
            // setInitialData([])
        },[location.state.sheetId])

    // useEffect(() => {
    //         setAccountResponseCount(findOcc(outputData,'accountId'))
    //     },[resChanged])
    

    // useEffect(()=>{
    //     dispatch(fetchColData('Form-102',AuditTypeSetRed.auditType))
    //     dispatch(fetchDDData('Form-102'))
    //     dispatch(fetchPartyHeaderData('Form-102',AuditTypeSetRed.auditType))
    //   },[])

    //   useEffect(()=>{
    //     console.log(getDDData)
    //   },[getDDData])



    //   useEffect(()=>{
    //     axios.get(`https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/ParentHeader`)
    //     .then((res)=>{
    //         setnewHead(res.data)
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    //   },[])


    // useEffect(()=>{
    //     console.log(getColumnData)
    // },[getColumnData])
    // useEffect(()=>{
    //     console.log(getTableAccountData)
    // },[getTableAccountData])    
    // useEffect(()=>{
    //     console.log(getOutputData)
    // },[getOutputData])   
    //  useEffect(()=>{
    //     console.log(getDDData)
    // },[getDDData])    
    // useEffect(()=>{
    //     console.log(getPartyHeaderData)
    // },[getPartyHeaderData])    
    // useEffect(()=>{
    //     console.log(getTestData)
    // },[getTestData])



    return (
        <>
        {getOutputData.val.length >= 0 ?<>{generatedSheetDetails && <div style={{position:'sticky',top:'0',zIndex:'999'}}>
            <NavbarParty sheets = {generatedSheetDetails} auditId = {auditId} schemeCode = {schemeCode} userId = {userId} allAcc={`${allAcc}`} sheetId={location.state.sheetId} sheetAccounts={accounts} outputId={outputId}/>
            </div>
            }
        {/* {isSaved? <><div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Saving the Response...</strong>
        </div></>:<></>} */}
        <div className='party-sheet' style={{marginLeft:'1vw'}}>
        <div className="party-btn-div">
        </div>
        {

           getColumnData.loading ? 
           <div className="d-flex justify-content-center party-loading-style">
           <div className="spinner-border" role="status">
               <span className="visually-hidden">Loading...</span>
           </div>
           </div> : 

           getTableAccountData.loading ? <div className="d-flex justify-content-center party-loading-style">
          <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
          </div>
          </div> : 
           getOutputData.loading ? <div className="d-flex justify-content-center party-loading-style">
           <div className="spinner-border" role="status">
               <span className="visually-hidden">Loading...</span>
           </div>
           </div> :  getDDData.loading ? <div className="d-flex justify-content-center party-loading-style">
           <div className="spinner-border" role="status">
               <span className="visually-hidden">Loading...</span>
           </div>
           </div> :
           getPartyHeaderData.loading ?  <div className="d-flex justify-content-center party-loading-style">
           <div className="spinner-border" role="status">
               <span className="visually-hidden">Loading...</span>
           </div>
           </div> :
           getTestData.loading ? <div className="d-flex justify-content-center party-loading-style">
           <div className="spinner-border" role="status">
               <span className="visually-hidden">Loading...</span>
           </div>
           </div> :
        //    getAccountDataId.loading ? <div className="d-flex justify-content-center party-loading-style">
        //    <div className="spinner-border" role="status">
        //        <span className="visually-hidden">Loading...</span>
        //    </div>
        //    </div> :

        <Table accData={['Test Details',...accounts]} TableData={getTestData.val} columnData={getColumnData.val.sort((a,b)=>{return a.orderBy-b.orderBy})} schemeCode={location.state.schemeCode} outputData={getOutputData.val} auditId={auditId} userId = {userId} accDetails={getTableAccountData.val} newHead={getPartyHeaderData.val}/>

        }
           </div> 
        </>:<><div class="d-flex justify-content-center party-loading-style">
               <div class="spinner-border" role="status">
                   <span class="visually-hidden">Loading...</span>
               </div>
               </div></>}
       </>
    )
}

export default withRouter(PartySheetsInput)