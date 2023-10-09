import React, {useState,useEffect } from 'react'
import { Styles } from './TableStyles'
import axios from 'axios'
import {useHistory, useLocation } from "react-router-dom";
import './HomeStyle.css'
import { useDispatch,useSelector,batch } from 'react-redux'
import { fetchAccData, fetchAccSPData } from '../actions'
import { fetchExcelData, fetchExcelSPData } from '../actions/ExcelDownloadAct'
import { openSmarten } from '../actions/SmartenApi'
import { fetchColData } from '../actions/ColumnHeader'
import HomeCollapse from './HomeCollapse'
import NewNavBar from './NewNavBar'
import HomeTables from './HomeTables'
import { fetchAreaData } from '../actions/AreaAction';
import { fetchNewAccData } from '../actions/NewAccountAct';
import { fetchPartyHeaderData } from '../actions/PartyHeaderAct';
import { fetchDDData } from '../actions/PartyDDAct';
import { fetchTestData } from '../actions/TestData';
import { fetchAccDataId } from '../actions/AccountData';
import SpinnerLoader from './SpinnerLoader';
import { fetchUserData } from '../actions/UserCountAct';
import { AuditTypeSetter } from '../actions/OutputDataSetter';
import { fetchApiData } from '../actions/ApiRepoAction';
const fs = require('fs')


const HomeTable = ({setHomeAccountsDetails,setHomeTestDetails,setHomeGeneratedSheetDetails}) => {

  const location = useLocation();

  const auditUrl = location.state.auditUrl;

  const [userId, setUserId] = useState(location.state.userId);
  const[accounts,setAccounts] = useState([]);
  const [data, setData] = useState([]);
  const [auditId, setAuditId] = useState();
  const[auditTitle,setAuditTitle] = useState();
  const[solId,setSolId] = useState();
  const[auditStatus,setAuditStatus] = useState();
  const[selectAccount,setSelectAccount] = useState(false);
  const[schemeCode,setSchemeCode] = useState();
  const[mandatoryAccounts,setMandatoryAccounts] = useState([]);
  const[selectedMandatoryAccounts,setSelectedMandatoryAccounts] = useState([]);
  const[schemeAll,setSchemeAll] = useState(true);
  const[auditType,setAuditType] = useState();
  const[tableSwitch,settableSwitch]=useState(0)
  const[area,setarea] =useState([])
  const [startDate,setstartDate]=useState('')

  const myAccState = useSelector((state)=>state.getAccountData)
  const myAccSpState = useSelector((state)=>state.getAccountSpData)
  const mySelRowState = useSelector((state)=>state.selectedRowState)
  const getColumnData =  useSelector((state)=>state.getColumnData)
  const AuditTypeSetRed = useSelector((state)=>state.AuditTypeSetRed)
  const getAreaData = useSelector((state)=> state.getAreaData)
  const AreaSchemeDateSetRed = useSelector((state)=>state.AreaSchemeDateSetRed)
  const getNewAccData = useSelector((state)=>state.getNewAccData);

  
  const dispatch = useDispatch()
  const history = useHistory();
  const date = new Date;


  useEffect(() => {

           axios
            .get(auditUrl)
            .then((response) => {
              setAuditId(response.data[0].id)
              setAuditTitle(response.data[0].auditTitle)
              setSolId(response.data[0].solId)
              dispatch( fetchAreaData(response.data[0].auditType))
              dispatch(fetchDDData('Form-101'))
              setAuditType(response.data[0].auditType)
              setAuditStatus(response.data[0].status)
              setstartDate(response.data[0].startDate)
              dispatch(AuditTypeSetter({auditType:response.data[0].auditType,userId:userId,auditUrl:auditUrl,solId:response.data[0].solId}))

              // fs.appendFile(`log_${date}.txt`,`${date} : /?AuditId=${response.data[0].id}&UserId=${userId}&auditType=${response.data[0].auditType}`, (err) => {
              //   if (err) throw err;
              //   console.log('Data appended to file');
              // })
            })
  },[]);

  useEffect(()=>{
    setarea([...getAreaData.val])
  },[getAreaData])

  useEffect(()=>{
    dispatch(AuditTypeSetter({auditType:auditType,userId:userId,auditUrl:auditUrl}))
  },[])

  useEffect(()=>{

  },[])


  

    const dividePartyFunction = () => {
          //  setSelectedMandatoryAccounts([]);
           setAccounts(
            mySelRowState.map((row) =>
              ((row.original.userId === null) ||(row.original.userId === userId)||(row.original.userId === '')) && 
              (row.original.status !=='Submitted')?
              row.original.id : null),
            );
            // mySelRowState.map((row) => {
            //   if(row.original.mandatory === 'Yes')
            //   setSelectedMandatoryAccounts(selectedMandatoryAccounts => [...selectedMandatoryAccounts,row.original.id])
            // })
        setSelectAccount(true);
    }

    const generateExcel = () => {
      schemeCode !== 'All' ? dispatch(fetchExcelSPData(solId,schemeCode)) : dispatch(fetchExcelData(solId))
      }


  useEffect(() => {
    if(selectAccount === true){
      // if(selectedMandatoryAccounts.sort().join(',') === mandatoryAccounts.sort().join(','))
      // {
        // console.log(schemeCode)
        // console.log(AreaSchemeDateSetRed.area)

      dispatch(fetchColData('Form-102',AuditTypeSetRed.auditType,AreaSchemeDateSetRed.area))
      dispatch(fetchTestData(schemeCode,AreaSchemeDateSetRed.area,AreaSchemeDateSetRed.freq))
      dispatch(fetchDDData('Form-102'))
      dispatch(fetchPartyHeaderData('Form-102',AuditTypeSetRed.auditType))
      

        history.push({
          pathname: '/PartySheets/1',
          state: { accountsData: `${accounts.filter(n => n).sort()}`,
               auditId: `${auditId}`,
               schemeCode: `${schemeCode}`,
               userId: `${userId}`,
               sheetId: 1,
               solId : solId
               }
        });

      // }
        // else{
        // alert('Not all mandatory accounts are selected')
        // if(window.confirm('Do you want to continue'))
        // {
        //   history.push({
        //     pathname: '/PartySheets/1',
        //     state: { accountsData: `${accounts.filter(n => n).sort()}`,
        //     auditId: `${auditId}`,
        //     schemeCode: `${schemeCode}`,
        //     userId: `${userId}`,
        //     sheetId: 1 }
        //   });
        // }
        setSelectAccount(false)
        // }
    }
    },[selectAccount])

    useEffect(()=>{
      setData(myAccSpState.val);
      setSchemeAll(true)
    },[myAccSpState])

    useEffect(()=>{
      setData(myAccState.val);
      setSchemeAll(false)
    },[myAccState])

    const handleFetchAccounts = () => {
      if(AreaSchemeDateSetRed === null){
        alert('Please select all the filters')


      }else if((Object.values(AreaSchemeDateSetRed).length !==4) || (Object.values(AreaSchemeDateSetRed).includes(''))){
        alert('Please select all the filters')
       }else{
        //  dispatch(fetchUserData(AreaSchemeDateSetRed.schemeCode,solId,AreaSchemeDateSetRed.currDate))
        //  schemeCode !=='All' ? 
   
         batch(()=>{
           // dispatch(fetchAccData(solId))
           dispatch(fetchApiData('fetch',AreaSchemeDateSetRed.area,'Form-101',AreaSchemeDateSetRed.schemeCode,solId,AreaSchemeDateSetRed.currDate,'','','',AreaSchemeDateSetRed.currDate2,AreaSchemeDateSetRed.schemeCode,auditId))
          //  dispatch(fetchNewAccData(AreaSchemeDateSetRed.area,AreaSchemeDateSetRed.schemeCode,solId,AreaSchemeDateSetRed.currDate,AreaSchemeDateSetRed.freq))
         }) 
        //  :
        //  batch(()=>{dispatch(fetchAccSPData(solId,schemeCode,AuditTypeSetRed.auditType))})  
       }
            

    }

    useEffect(() => {
      setMandatoryAccounts([])
      if(data)
      {
        data.map((dat) => {
          if(dat.mandatory === 'Yes')
            setMandatoryAccounts(mandatoryAccounts => [...mandatoryAccounts,dat.id])
        })
      }
    }, [data]);

    function getToken(){
    dispatch(openSmarten())

    }

    const handleTableSwitch = () =>{
      tableSwitch===0 ? settableSwitch(1) : settableSwitch(0)
    }

    useEffect(()=>{
      if(AreaSchemeDateSetRed !==null){
        if(tableSwitch===0){
          dispatch(fetchColData('Form-101',AuditTypeSetRed.auditType,AreaSchemeDateSetRed.area))
        }else{
          dispatch(fetchColData('Form-103',AuditTypeSetRed.auditType,AreaSchemeDateSetRed.area))
        }
      }
    },[tableSwitch])
    
    window.onbeforeunload = function() { 
      window.setTimeout(function () { 
          window.location = `/?AuditId=${auditId}&UserId=${userId}&auditType=${AuditTypeSetRed.auditType}`;
      }, 0); 
      window.onbeforeunload = null; // necessary to prevent infinite loop, that kills your browser 
  }

  useEffect(()=>{
    setData(getNewAccData.val)
  },[getNewAccData])


    return (
        <div>
        <NewNavBar getToken={getToken} dividePartyFunction={dividePartyFunction} generateExcel={generateExcel} schemeAll={schemeAll} userId={userId} handleTableSwitch={handleTableSwitch} />
        <HomeCollapse auditTitle={auditTitle} solId={solId} auditStatus={auditStatus} setSchemeCode={setSchemeCode} auditId={auditId} auditType={auditType} handleFetchAccounts={handleFetchAccounts} area={area} startDate={startDate} />
      <Styles>
        {
          getNewAccData.loading ?  <SpinnerLoader/>
          :
          <HomeTables getColumnData={getColumnData} myAccState={myAccState} tableSwitch={tableSwitch} data={data} userId={userId}/>
        }
      </Styles>
    </div>
      )
    }

export default HomeTable