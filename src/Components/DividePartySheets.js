import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {
    Link,Route, useHistory
  } from "react-router-dom";
import PartySheetsInput from './PartySheetsInput';
import { useDispatch } from 'react-redux';
import { fetchAccDataId } from '../actions/AccountData';
import { fetchColData } from '../actions/ColumnHeader';
import { fetchTestData } from '../actions/TestData';
import { fetchTableAccData, restTableAccountData } from '../actions/AccountDataTable';

const DividePartySheets = ({generatedSheetDetails,accounts,auditId,schemeCode,userId,auditType,handleCurrSheet}) => {

    const history = useHistory()
    const dispatch = useDispatch()

    // const[sheetDetails,setSheetDetails] = useState([])

    // useEffect(() => {
    //         setSheetDetails(generatedSheetDetails)
    // })
    
    const handleSheetChange = (e)=>{
        // console.log(JSON.stringify({
        //     pathname:`/PartySheets/${e.target.value}`,
        //     state : {
        //         accountsData : `${accounts.split(',').sort()}`,
        //         auditId :`${auditId}`,
        //         schemeCode : `${schemeCode}`,
        //         userId :`${userId}`,
        //         sheetId : e.target.value
        //     }
        // }))
        handleCurrSheet(e.target.value)
        // history.push({
        //     pathname:`/PartySheets/${e.target.value}`,
        //     state : {
        //         accountsData : `${accounts.split(',').sort()}`,
        //         auditId :`${auditId}`,
        //         schemeCode : `${schemeCode}`,
        //         userId :`${userId}`,
        //         sheetId : e.target.value
        //     }
        // })
        // alert((e.target.value-1)*10)
        // alert(accounts.split(',').slice((e.target.value-1)*10,((e.target.value-1)*10)+10))
        // window.location.reload()
      }



      

    return (
        <>
            {generatedSheetDetails && generatedSheetDetails.map((sheet) => {
                // if(sheet !== generatedSheetDetails.length){
                return <li onClick={(e)=>{handleSheetChange(e)}} value={sheet} style={{cursor:'pointer',width:'9vw',margin:'2px', borderBottom:'.1px solid black'}}>
                   {/* <  className = "dropdown-item" to = {{
                       pathname : "/PartySheets/"+ sheet,
                       state: { accountsData: `${accounts.split(',').sort()}`,
                       auditId: `${auditId}`,
                       userId: `${userId}`,
                       schemeCode: `${schemeCode}`,
                       sheetId: sheet }
                   }}>Party - {(((sheet-1) * 10)+ 1)} - {(sheet * 10)}</> */}
                   Party - {(((sheet-1) * 10)+ 1)} - {(sheet * 10)}
                </li> 
                // }
            })}            
        </>
    )
}

export default DividePartySheets
