import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {CSVLink} from 'react-csv'
import { useHistory } from 'react-router-dom';
import { fetchColData } from '../actions/ColumnHeader';
import { fetchTestData } from '../actions/TestData';

const NewNavBar = ({getToken,dividePartyFunction,generateExcel,schemeAll,userId,handleTableSwitch}) => {
 const  getNewAccData = useSelector((state)=>state.getNewAccData);
 const AreaSchemeDateSetRed = useSelector((state)=>state.AreaSchemeDateSetRed)

 const history = useHistory();
 const dispatch = useDispatch();
 
 const date = new Date()

 const handleObservation = () =>{



  history.push({
    pathname :'/Component/CompComponent'
  })

    dispatch(fetchColData('Form-106','Universal branch',AreaSchemeDateSetRed.area))
  dispatch(fetchTestData(AreaSchemeDateSetRed.schemeCode,AreaSchemeDateSetRed.area,AreaSchemeDateSetRed.freq))
 }

  return (
    <div>
      <p style={{backgroundColor:'#091332',padding:'5px', position:'sticky',top:'0',zIndex:'999'}}>
          <button className="btn mx-2 my-2" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample1" style={{backgroundColor:'#091332', color:'white',fontWeight:'bolder'}} aria-expanded="false" aria-controls="multiCollapseExample1" id='btn1'>AUDIT DETAILS</button>
          <button className="btn mx-2 my-2" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2" id='btn2' style={{backgroundColor:'#091332', color:'white',fontWeight:'bolder'}}>FILTERS</button>
          <button className="btn mx-2 my-2" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample3" id='btn3' style={{backgroundColor:'#091332', color:'white',fontWeight:'bolder'}}>USER SELECTION</button>
          {/* <button className='btn mx-2 my-2' type='button' data-bs-toggle='coll1apse' data-bs-target='#multicollapseExample4' aria-expanded='false' aria-controls='multiCollapseExample4' id='btnbtn4' onClick={getToken} style={{backgroundColor:'#091332', color:'white',fontWeight:'bolder'}}>DASHBOARD</button> */}
          {/* <button className="btn mx-2 my-2 btn" style={{backgroundColor:'#091332', color:'white',fontWeight:'bolder'}}onClick={handleObservation}>OBSERVATIONS</button> */}
          <button type="button" onClick = {dividePartyFunction} className="btn mx-2 my-2 btn btn-success" style={{
            display: getNewAccData.val.length < 1 ? 
            'none' :
            AreaSchemeDateSetRed.schemeCode ==='All' ? 'none' :
            'inline-block' ,
            // backgroundColor:'#091332',
             color:'white',fontWeight:'bolder'}}>GENERATE</button>
             <CSVLink
             className='mx-2 my-2 btn btn-success'
             style={{fontWeight:'bolder',color:'white',display:getNewAccData.val.length < 1 ? 'none' :  'inline-block'}}
             data={getNewAccData.val.map((res)=>{
              if(AreaSchemeDateSetRed.area == 'Deposit'){
                return {
                  "Status" : res.status,
                  "User Id" : res.userId,
                  "Mandatory Account" : res.mandatory,
                  "Account Number" : res.id,
                  "Name" : res.customerName,
                  "Account Open Date" : res.sanctionDate,
                  "Audit Date" : res.auditDate,
                  "Outstanding Amount" : res.outstandingAmt,
                  "Overdue" :res.overdue,
                  "Overdue Since" : res.overduesSince,
                  "ROI":res.roi,
                  "Asset Class" : res.assetClass,
                  "Description of Activity" : res.descOfActivity,
                  "Zone" : res.zone,
                  "Region" : res.region,
                  "Branch Name" : res.branchName,
                  "Scheme" : res.schemeDesc,
                  "Limit" : res.limit,
                  "Customer Id" : res.customerId,
                  "Scheme Code" : res.schemeCode,
                  "Sol Id" :res.solId 
                }
              }else{
                return {
                  "Status" : res.status,
                  "User Id" : res.userId,
                  "Mandatory Account" : res.mandatory,
                  "Account Number" : res.id,
                  "Name" : res.customerName,
                  "Sanction Date" : res.sanctionDate,
                  "Audit Date" : res.auditDate,
                  "Outstanding Amount" : res.outstandingAmt,
                  "Overdue" :res.overdue,
                  "Overdue Since" : res.overduesSince,
                  "ROI":res.roi,
                  "Asset Class" : res.assetClass,
                  "Description of Activity" : res.descOfActivity,
                  "Zone" : res.zone,
                  "Region" : res.region,
                  "Branch Name" : res.branchName,
                  "Scheme" : res.schemeDesc,
                  "Limit" : res.limit,
                  "Customer Id" : res.customerId,
                  "Scheme Code" : res.schemeCode,
                  "Sol Id" :res.solId 
                }
              }
             })}
             filename={`Account Data ${date.toLocaleDateString() +Date.now()}`}
             >EXPORT ACCOUNTS DATA</CSVLink>
          {/* <button type="button" onClick = {generateExcel} className="btn mx-2 my-2" style={{backgroundColor:'#091332', color:'white',fontWeight:'bolder'}}>EXPORT ACCOUNTS DATA</button> */}
          {/* <button type="button" onClick = {handleTableSwitch} className="btn mx-2 my-2" style={{backgroundColor:'#091332', color:'white',fontWeight:'bolder'}}>EDIT HOME</button> */}

          <strong className="navbar-text" style={{float:'right',color:'white', fontWeight:'bolder'}}>Logged In: {userId}</strong>
          {/* <a href='' download={generateExcel}>Click to download</a> */}
          {/* <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows} filter={globalFilter} setGlobalFilter={setGlobalFilter} /> */}
        </p>
    </div>
  )
}

export default NewNavBar
