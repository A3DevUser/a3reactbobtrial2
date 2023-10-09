import axios from 'axios';
import React,{useState,useEffect, useRef} from 'react'
import {
    Link, useHistory
  } from "react-router-dom";
import DividePartySheets from './DividePartySheets';
import PartySheetsInput from './PartySheetsInput';
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';
import { PutOutputData, saveAccData } from '../actions/OutputDataPut';
import { fetchColData } from '../actions/ColumnHeader';
import { UploadFileData } from '../actions/UploadFilePost';
import { submitAccData, submitOutputData } from '../actions/SubmitOutputData';
import ReactModal from 'react-modal';
import './NavbarPartyStyles.css'
import { fetchModColData } from '../actions/ModalColumns';
import { fetchModData } from '../actions/ModalData';
import PreviewTable from './PreviewTable';
import { MainPartyDataSetter } from '../actions/MainPartyData';
import { Dropdown, DropdownButton,Spinner } from 'react-bootstrap';
import PreviewTable2 from './PreviewTable2';
import { fetchTestData } from '../actions/TestData';
import { CSVLink } from 'react-csv';
import { saveUserData } from '../actions/SaveUserId';
import { fetchApiData } from '../actions/ApiRepoAction';
import { fetchOutputId } from '../actions/outputIdCount';

function NavbarParty({sheets,auditId,schemeCode,userId,allAcc,auditType, sheetId, sheetAccounts,solId,outputId}) {

  const[cellArray,setcellArray]=useState([])
  const[finalCellArray,setfinalCellArray]=useState([])
  const[submitState,setsubmitState]=useState(false)
  const[subBtSt,setsubBtSt]=useState('none')
  const[modalOpen,setmodalOpen]=useState(false)
  const[modal2Open,setmodal2Open]=useState(false)
  const[finalArray,setfinalArray]=useState([])
  const[endis, setendis] = useState(false)
  const[navPer,setnavPer]=useState(false)
  const[isNav,setisNavPer]=useState(false)
  const[isSubmit,setisSubmit]=useState(false)
  const[subPer,setsubPer]=useState(false)


  const OutputDataSetRed = useSelector((state)=>state.OutputDataSetRed)
  const SubmitDataSetRed = useSelector((state)=>state.SubmitDataSetRed)
  const OutputDataFileSetRed = useSelector((state)=>state.OutputDataFileSetRed)
  const getModColumnData = useSelector((state)=>state.getModColumnData)
  const getModData = useSelector((state)=>state.getModData)
  const MainPartyDataRed = useSelector((state)=>state.MainPartyDataRed)
  const getTableAccountData = useSelector((state)=>state.getTableAccountData)
const SubmitAccDataRed = useSelector((state)=>state.SubmitAccDataRed)
const AreaSchemeDateSetRed = useSelector((state)=>state.AreaSchemeDateSetRed)
const AuditTypeSetRed = useSelector((state)=>state.AuditTypeSetRed)
const getOutputId = useSelector((state)=>state.getOutputId)
const SendOutputData = useSelector((state)=>state.SendOutputData)

  // useEffect(()=>{
  //   console.log(getTableAccountData.val)
  // },[getTableAccountData])


  const accRef = useRef()

  const dispatch = useDispatch()
  let failArr=[]
  // const handleSave = ()=>{

// for (let i = 0; i < OutputDataSetRed.length; i++) {
//   console.log(OutputDataSetRed)
//   if(OutputDataSetRed[i].result==='Fail'&&(OutputDataSetRed[i].remarks===''||OutputDataSetRed[i].remarks===null||OutputDataSetRed[i].remarks===undefined)){
//     alert(`Account: ${OutputDataSetRed[i].accountId}\n Test: ${OutputDataSetRed[i].testTitle} `)
//   }
// }

//  failArr = []
// OutputDataSetRed.reduce((finalArray,current)=>{
//     let obj = finalArray.find((item) => (item.accountId === current.accountId)&&(item.testTitle===current.testTitle))

//     if(obj){
//      finalArray.splice(finalArray.findIndex(item=> (item.accountId===current.accountId &&item.testId===current.testId)),1)
//       return finalArray
//     }else{
//       return finalArray.concat([current])
//     }
//   },[])


// OutputDataSetRed.map((res,ind)=>{
//   if(failArr.filter((fil,i)=>{return (fil.accountId+fil.testId)===(res.accountId+res.testId)}) !==[]){
//     failArr=failArr.filter((fil,i)=>{return (fil.accountId+fil.testId)!==(res.accountId+res.testId)})
//     failArr.push(res)
//   }else{
//     failArr.push(res)
//   }
// })

// if(failArr.filter(value => JSON.stringify(value) !== '{}').filter((fil)=>{return (fil.result=='Fail')&&(fil.remarks===null || fil.remarks===undefined || fil.remarks==='')}).length!==0){
//   setmodalOpen(true);
// }else{
//   let formData
//   if(failArr){
//   dispatch(PutOutputData(failArr.filter(value => JSON.stringify(value) !== '{}').map((res)=>({...res,isFinCreated:'no'}))))
//   }
//   if(OutputDataFileSetRed){
//     for (let i = 0; i < OutputDataFileSetRed.length; i++) {
//       formData = new FormData()
//       formData.append('file',OutputDataFileSetRed[i][0])
//     dispatch(UploadFileData(formData))
//     }
//   }
// }
// setfinalArray(failArr.filter(value => JSON.stringify(value) !== '{}').filter((fil)=>{return (fil.result=='Fail')&&(fil.remarks===null || fil.remarks===undefined || fil.remarks==='')}))

//       }

// useEffect(()=>{
// alert(outputId)
// },[outputId])


  const handleSubmitAll = async()=>{
    // dispatch(fetchOutputId(outputId))
    setisSubmit(true)
    // let text = 'Do You want to Submit?'
    // if(window.confirm(text)){
    //     // window.open(`/?AuditId=${auditId}&UserId=${userId}&auditType=${auditType}`,"_self")
    //           dispatch(submitOutputData(acc,schemeCode))
    //   // dispatch(submitAccData(acc,AreaSchemeDateSetRed.currDate))
    //   dispatch(fetchApiData('submit',AreaSchemeDateSetRed.area,'Form-102','',AuditTypeSetRed.solId,AreaSchemeDateSetRed.currDate,acc,'','',AreaSchemeDateSetRed.currDate2,AreaSchemeDateSetRed.schemeCode,auditId))
    //   setendis(true)
    // }

  }

  useEffect(()=>{
    if(isSubmit){
      handleSave()
    }
  },[isSubmit])

  
  // useEffect(()=>{
  //   // alert(outputId)
  //   dispatch(fetchOutputId(outputId))
  // },[SubmitDataSetRed])

  // useEffect(()=>{
  //   console.log(getOutputId.val[0])
  // },[getOutputId])

  const handleSave = ()=>{

    setcellArray([])

    SubmitDataSetRed.map((res)=>{
      return res.cells.filter((cfil)=>{
        return cfil.value != undefined
      }).filter((fill)=>{
        return fill.column.parent.Header !='Test Details'
      }).map((cRes)=>{
        return handleDataChange(cRes)
      })
    })


    setsubmitState(true)
    // dispatch(submitOutputData(acc,schemeCode))

  }

  const handleDataChange = (cell)=>{
    let obj= new Object
     obj['srNo']=cell.row.original.srNo
      obj['objective']=cell.row.original.objective
      obj['process']=cell.row.original.process
      obj['subProcess']=cell.row.original.subProcess
      obj['testId']=cell.row.original.testRef
      obj['testTitle']=cell.row.original.testTitle
      obj['risk']=cell.row.original.risk
      obj['accountId']=cell.column.parent.id
      obj['auditId']=auditId
      obj['userId'] = userId
      obj['schemeCode']=getTableAccountData.val.filter((tDfil)=>{return tDfil.id===cell.column.parent.id})[0].schemeCode
      obj['customerId'] = getTableAccountData.val.filter((tDfil)=>{return tDfil.id===cell.column.parent.id})[0].customerId
      obj['customerName'] = getTableAccountData.val.filter((tDfil)=>{return tDfil.id===cell.column.parent.id})[0].customerName
      obj['portfolio']= schemeCode
      obj['cunDate'] = getTableAccountData.val.filter((tDfil)=>{return tDfil.id===cell.column.parent.id})[0].cunDate
      // getTableAccountData.val.filter((tDfil)=>{return tDfil.id===cell.column.parent.id})[0].portfolio
      obj[cell.column.id.includes('remarks') ? 'remarks' : cell.column.id.includes('result') ? 'result':'attachment']=cell.value
      if(cell.column.id.includes('result')){
        Object.assign(obj,{remarks:cell.row.cells.filter((fil)=>{
          return fil.column.id===`remarks$#${cell.column.parent.id}`})[0].value,
          attachment:cell.row.cells.filter((fil)=>{
            return fil.column.id===`attachment$#${cell.column.parent.id}`})[0].value})
      }else if(cell.column.id.includes('remarks')){
        Object.assign(obj,{
          result:    
          cell.row.cells.filter((fil)=>{
          return fil.column.id===`result$#${cell.column.parent.id}`})[0].value ===null
          ||
          cell.row.cells.filter((fil)=>{
            return fil.column.id===`result$#${cell.column.parent.id}`})[0].value ===undefined
          ? 'Pass' :
          cell.row.cells.filter((fil)=>{
          return fil.column.id===`result$#${cell.column.parent.id}`})[0].value
          
          ,attachment:cell.row.cells.filter((fil)=>{
            return fil.column.id===`attachment$#${cell.column.parent.id}`})[0].value})
      }else if(cell.column.id.includes('attachment')){
        Object.assign(obj,{result:cell.row.cells.filter((fil)=>{
          return fil.column.id===`result$#${cell.column.parent.id}`})[0].value ===null
          ||
          cell.row.cells.filter((fil)=>{
            return fil.column.id===`result$#${cell.column.parent.id}`})[0].value ===undefined
          ? 'Pass' :
          cell.row.cells.filter((fil)=>{
          return fil.column.id===`result$#${cell.column.parent.id}`})[0].value,remarks:cell.row.cells.filter((fil)=>{
            return fil.column.id===`remarks$#${cell.column.parent.id}`})[0].value})
      }
  

    setcellArray(old=>{return[...old,obj]})

  }

  useEffect(()=>{
    console.log(getOutputId.val)
  },[getOutputId])
  
useEffect(()=>{
  let formData
  failArr = []

  cellArray.map((res,ind)=>{
  if(failArr.filter((fil,i)=>{return (fil.accountId+fil.testId)===(res.accountId+res.testId)}) !==[]){
    failArr=failArr.filter((fil,i)=>{return (fil.accountId+fil.testId)!==(res.accountId+res.testId)})
    failArr.push(res)
  }else{
    failArr.push(res)
  }
})
setfinalArray(failArr.filter(value => JSON.stringify(value) !== '{}').filter((fil)=>{return (fil.result!=='Pass' && fil.result !=='Na')  &&(fil.remarks===null || fil.remarks===undefined || fil.remarks==='')}))


if(failArr.filter(value => JSON.stringify(value) !== '{}').filter((fil)=>{return (
  fil.result !=='Pass'&& fil.result !== 'Na')&&
  (fil.remarks===null || fil.remarks===undefined || fil.remarks==='')}).length!==0){
  dispatch(fetchModColData('Form-104'))
  setmodalOpen(true)
  setsubmitState(false)
  setnavPer(false)
  setisSubmit(false)
  setisNavPer(false)
}
else{
  if(submitState===true){
    // dispatch(saveAccData(sheetAccounts,schemeCode))
    dispatch(PutOutputData([...failArr.map((res)=>({...res,isFinCreated:'no'}))],isSubmit,acc,schemeCode,auditId,AreaSchemeDateSetRed.area,AuditTypeSetRed.solId,AreaSchemeDateSetRed.currDate,AreaSchemeDateSetRed.currDate2,AreaSchemeDateSetRed.schemeCode,getOutputId.val[0],outputId));
    // dispatch(saveUserData(sheetAccounts,userId,AreaSchemeDateSetRed.currDate));
    dispatch(fetchApiData('save',AreaSchemeDateSetRed.area,'Form-102','','',AreaSchemeDateSetRed.currDate,sheetAccounts,'',userId,AreaSchemeDateSetRed.currDate2,AreaSchemeDateSetRed.schemeCode,auditId))
    if(isNav){
      setnavPer(true)
    }
    if(isSubmit){
      if(getOutputId.val[0] == outputId){
        setendis(true)
    }else{
      setisSubmit(false)
    }
    }

    // if(isSubmit){
    //                dispatch(submitOutputData(acc,schemeCode))
    //   // dispatch(submitAccData(acc,AreaSchemeDateSetRed.currDate))
    //   dispatch(fetchApiData('submit',AreaSchemeDateSetRed.area,'Form-102','',AuditTypeSetRed.solId,AreaSchemeDateSetRed.currDate,acc,'','',AreaSchemeDateSetRed.currDate2,AreaSchemeDateSetRed.schemeCode,auditId))
    //   setendis(true)
    // }
    
  }
  if(OutputDataFileSetRed){
    for (let i = 0; i < OutputDataFileSetRed.length; i++) {
      formData = new FormData()
      formData.append('file',OutputDataFileSetRed[i][0])
    dispatch(UploadFileData(formData))
    }
  }
    setsubmitState(false)
}
},[submitState])


  const history = useHistory()
      const [value, setValue] = useState()
      const [data, setData] = useState()
      const[loading,setloading]=useState(true)
      const[acc,setacc]=useState([])

      
      useEffect(()=>{
        setacc([...allAcc.split(',')])
      },[])

      useEffect(()=>{
        setloading(false)
      },[acc])
            

  const homeUrl = '/?AuditId='+auditId+'&UserId='+userId


    //   const handleSearch = async (e) => {
    //     e.preventDefault()
    //  await 
    //     axios.get(`https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/getAccountsByIds?accountId=${value}`)
    //     .then((response) => {
    //       setData(response.data);
    //       setValue("");
    //     })
    //      };  

   const handleHomeNav = ()=>{
    dispatch(fetchColData('Form-101',AuditTypeSetRed.auditType,AreaSchemeDateSetRed.area))
      // history.push({
      //   pathname: '/home',
      //   state: {auditUrl: `${AuditTypeSetRed.auditUrl}`,
      //        userId: `${AuditTypeSetRed.userId}`,
      //       auditType : `${AuditTypeSetRed.auditType}`
      //       }
      // });
      window.open(`/?AuditId=${auditId}&UserId=${userId}&auditType=${AuditTypeSetRed.auditType}`,"_self")

   }

  //  

    const searchAccount = (e) =>{
      setisNavPer(true)
      handleSave()
      // dispatch(fetchTestData(schemeCode,auditId))
      if(acc.findIndex((sAcc)=>{return sAcc===accRef.current.value})===-1){
        alert(accRef.current.value+' does not exist')
      }else{
        if(getOutputId.val[0] == outputId.length){
        //   alert('Please fill all the remarks')
        // }else{
          if(navPer){
            // dispatch(fetchColData('Form-102',AuditTypeSetRed.auditType,AreaSchemeDateSetRed.area))
            handleCurrSheet(Math.ceil((acc.findIndex((sAcc)=>{return sAcc===accRef.current.value})+1)/10))
            // console.log(JSON.stringify({
            //   pathname:`/PartySheets/${Math.ceil((acc.findIndex((sAcc)=>{return sAcc===accRef.current.value})+1)/10)}`,
            //   state : {
            //     accountsData : `${acc.filter(n=>n).sort()}`,
            //     auditId :`${auditId}`,
            //     schemeCode : `${schemeCode}`,
            //     userId :`${userId}`,
            //     sheetId : Math.ceil((acc.findIndex((sAcc)=>{return sAcc===accRef.current.value})+1)/10)
            //   }
            //  }))
            history.push({
             pathname:`/PartySheets/${Math.ceil((acc.findIndex((sAcc)=>{return sAcc===accRef.current.value})+1)/10)}`,
             state : {
               accountsData : `${acc.filter(n=>n).sort()}`,
               auditId :`${auditId}`,
               schemeCode : `${schemeCode}`,
               userId :`${userId}`,
               sheetId : Math.ceil((acc.findIndex((sAcc)=>{return sAcc===accRef.current.value})+1)/10)
             }
            })
          }

        }
        // window.location.reload()
      }
    }


    useEffect(()=>{
      if(sheets.length ===1){
        setsubBtSt('block')
      }
      setnavPer(false)
      setisNavPer(false)
    },[sheets])

    const handleCurrSheet =(e)=>{
      setisNavPer(true)
      handleSave()
      if(getOutputId.val[0] == outputId.length){
      //   alert('please fill remarks for all the accounts')
      // }
      // else{
        if(navPer){
  
          // handleCurrSheet(e.target.value)
          history.push({
              pathname:`/PartySheets/${e}`,
              state : {
                  accountsData : `${allAcc.split(',').sort()}`,
                  auditId :`${auditId}`,
                  schemeCode : `${schemeCode}`,
                  userId :`${userId}`,
                  sheetId : e
              }
          })
          e===sheets.length ? setsubBtSt('block') : setsubBtSt('none')
  
        }
      }
    }

    const handleMSave = ()=>{
      setmodalOpen(false)
    }
  
    const handleM2Save = ()=>{
      setmodal2Open(false)
    }

      

    return (
      <>

<ReactModal
        isOpen={modal2Open}
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={200}
        ariaHideApp={false}
        >
          <h4 >SUMMARY</h4><br/>
          {/* <CSVLink
          className='btn btn-success my-2'
          data={getModData.val.map((res)=>{
            return {
              "Account Number" : res.accountId,
              "Result" : res.result,
              "Remark" :res.remarks,
              "User Id" : res.userId,
              "Audit Id" : res.auditId,
              "Test Title" : res.testTitle,
              "Scheme Code" : res.schemeCode
            }
          })}
          filename={schemeCode +'_'+Date.now()}
          >Export</CSVLink> */}
          <div 
          style={{overflow:'scroll',height:'55vh', width:`${(getModColumnData.val.length)*255}px` ,border:'1px solid black', maxWidth:'1350px'}}
          >
          {/* {finalArray.map((res)=>{
            return<div>
              <h5><u>Account Number:</u> {res.accountId}</h5>
              <h5><u>Test : </u>{res.testTitle}</h5><br/>
            </div>
          })} */}
          {
            getModColumnData.loading ? <div className="d-flex justify-content-center party-loading-style">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            </div> : getModData.loading ? <div className="d-flex justify-content-center party-loading-style">
          <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
          </div>
          </div> :
          <>
            <PreviewTable2 colData={getModColumnData.val.sort((a,b)=>{return a.orderBy - b.orderBy})} tableD={getModData.val}/>
          </>
          }
          </div>
          <button className='btn btn-success' style={{marginLeft:'45%',paddingLeft:'20px',marginTop:'20px',paddingRight:'20px', fontWeight:'bolder', fontSize:'20px'}} onClick={()=>{handleM2Save()}}>Ok</button>
        </ReactModal> 

              <ReactModal
        isOpen={modalOpen}
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={200}
        ariaHideApp={false}
        >
          <h4 >Please fill the remarks for below Accounts tests</h4><br/>
          <div 
          style={{overflow:'scroll',height:'55vh', width:`${(getModColumnData.val.length)*255}px` ,border:'1px solid black', maxWidth:'1350px'}}
          >
          {/* {finalArray.map((res)=>{
            return<div>
              <h5><u>Account Number:</u> {res.accountId}</h5>
              <h5><u>Test : </u>{res.testTitle}</h5><br/>
            </div>
          })} */}{
            getModColumnData.loading ? <p>Loading...</p> :
            <PreviewTable colData={getModColumnData.val.sort((a,b)=>{return a.orderBy - b.orderBy})} tableD={finalArray} dataSetter={handleMSave}/>
          }
          </div>
          <button className='btn btn-success' style={{marginLeft:'45%',paddingLeft:'20px',marginTop:'20px',paddingRight:'20px', fontWeight:'bolder', fontSize:'20px'}} onClick={()=>{handleMSave()}}>Ok</button>
        </ReactModal> 
      {
       loading ? <p>Loading...</p> : <div className="navbar-main" style={{backgroundColor:'#091332'}}>
        <nav className="navbar sticky-top navbar-expand-lg ">
        <div className="container-fluid">
        <span className="navbar-brand nav-style" style={{color:'white',fontSize:'25px',cursor:'pointer'}} onClick={handleHomeNav}   >Account Assesment For Audit</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
        <li className="nav-item dropdown" >
          <a className="nav-link dropdown-toggle nav-link-style" style={{color:'white'}} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PARTY SHEETS
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{overflow:'scroll', height:'40vh'}}>
          <DividePartySheets generatedSheetDetails = {sheets} accounts = {`${acc}`} auditId = {auditId} schemeCode = {schemeCode} userId = {userId} auditType={auditType} handleCurrSheet={handleCurrSheet} />
          </ul>
        </li>
      </ul>
  <input list="Accounts" name="Accounts" id="browser" placeholder='Search Account...' ref={accRef} style={{marginLeft:'1vw'}}/>
  <datalist id="Accounts" >
{
  acc.map((res)=>{
    return < option value={res}/>
  })
}
  </datalist>
  <button onClick={searchAccount} className='btn btn-success mx-2'>Search</button>
    </div> 
    <DropdownButton
    title='Overview'
    variant='success'
    onSelect={(e)=>{
      dispatch(fetchModColData('Form-105'))
      if(e==='1'){
        dispatch(fetchModData(sheetAccounts,schemeCode,auditId))
      }else if(e==='2'){
        dispatch(fetchModData(acc,schemeCode,auditId))
      }
      setmodal2Open(true)
    }}
    >
      <Dropdown.Item eventKey={1}>Sheet Summary</Dropdown.Item>
      <Dropdown.Item eventKey={2}>Assesment Summary</Dropdown.Item>
    </DropdownButton>
    <button className='btn btn-success' style={{marginRight:'1vw',padding:'7px',marginLeft:'1vw'}} onClick={handleSave} disabled={endis}>Save</button>
  <button className='btn btn-success' style={{marginRight:'1vw', display:`${subBtSt}`}}  onClick={handleSubmitAll} >Submit</button> 

    <strong className="navbar-text" style={{color:'white',marginRight:'2vw'}}> Product: {schemeCode}</strong>
    <strong className="navbar-text" style={{float:'right', color:'white'}}> Logged In: {userId}</strong>
   </div>
</nav>
</div>
      }
      </>
    )
}

export default NavbarParty
