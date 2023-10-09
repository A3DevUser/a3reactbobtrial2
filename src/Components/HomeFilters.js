import {React,useEffect,useState} from 'react'
import axios from 'axios'
import { batch, useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { defaultStyles } from 'react-modal';
import { fetchSchemeData } from '../actions/SchemeAction';
import { areaSchemeDateSetter } from '../actions/OutputDataSetter';
import { Alert, Spinner } from 'react-bootstrap';
import { fetchAreaData } from '../actions/AreaAction';
import { fetchColData, fetchHomeColData } from '../actions/ColumnHeader';
import { fetchNewAccData } from '../actions/NewAccountAct';
import { fetchApiData } from '../actions/ApiRepoAction';
import './HomeFilter.css'

const HomeFilters = ({setSchemeCode,solId,area,startDate}) => {
    const dispatch = useDispatch()
    console.log(startDate)
    const currentDate = new Date(startDate);
    const currentMonth = currentDate.getMonth()+1;
    const currentYear = currentDate.getFullYear();
    const lastDate = new Date(currentDate.getFullYear(),currentDate.getMonth()+1,0);    
    // alert(`${currentYear.toString()}-${ currentMonth.toString().length === 1 ? (0+ (currentMonth.toString())) : (currentMonth.toString()) }-01`)

    let firstDateOfMonth = `${currentYear.toString()}-${ currentMonth.toString().length === 1 ? (0+ (currentMonth.toString())) : (currentMonth.toString()) }-01`
    let lastDateOfMonth = `${currentYear.toString()}-${ currentMonth.toString().length === 1 ? (0+ (currentMonth.toString())) : (currentMonth.toString()) }-${lastDate.getDate().toString()}`


    const schemeUrl = "https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/GetScheme"
    const[scheme,setScheme] = useState([]);
    const[schemeRed,setschemeRed] =useState([])
    const AuditTypeSetRed = useSelector((state)=>state.AuditTypeSetRed)
    const getSchemeData = useSelector((state)=>state.getSchemeData)
    const AreaSchemeDateSetRed = useSelector((state)=>state.AreaSchemeDateSetRed)
    const getDDData = useSelector((state)=>state.getDDData)
    const [proValue,setproValue] =useState('')
    const [minDate,setminDate]=useState(firstDateOfMonth.toString())
    const [maxDate,setmaxDate]=useState(lastDateOfMonth.toString())



    // useEffect(() => {
    //     // if(AuditTypeSetRed.auditType==='RBIA'){
    //         axios.get("https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/schemeBySol?solId=" + solId)
    //         .then(function(response){
    //             // console.log(response.data)
    //             setScheme(response.data); 
    //         });
        // }else if(AuditTypeSetRed.auditType==='Universal Audit'){
        //     axios.get("https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/UnischemeBySol?solId=" + solId)
        //     .then(function(response){
        //         // console.log(response.data)
        //         setScheme(response.data); 
        //     });
        // }else if(AuditTypeSetRed.auditType==='CAMP Audit'){
        //     axios.get("https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/CampschemeBySol?solId=" + solId)
        //     .then(function(response){
        //         // console.log(response.data)
        //         setScheme(response.data); 
        //     });
        // }
        
    // }, [])

    // useEffect(()=>{
    //     alert( JSON.stringify(AreaSchemeDateSetRed))
    // },[AreaSchemeDateSetRed])



    const handleArea = (e) =>{
        // dispatch(fetchApiData('fetch',e.value,'Form-101','','','','','','','',''))
        dispatch(fetchNewAccData('https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/getCreParaGovAccountData?','','','','','',''))
        setproValue('')
            dispatch(fetchSchemeData(solId,e.value));
            dispatch(areaSchemeDateSetter({...AreaSchemeDateSetRed,area : e.value}));

        if(AreaSchemeDateSetRed !== null){
            if(AreaSchemeDateSetRed.hasOwnProperty('area')){
                AreaSchemeDateSetRed['area'] = e.value
            }
            if(AreaSchemeDateSetRed.hasOwnProperty('schemeCode')){
                dispatch(areaSchemeDateSetter({...AreaSchemeDateSetRed,schemeCode : ''}))
            }
        }
        // dispatch(fetchColData('Form-101',AuditTypeSetRed.auditType,e.value))
    }

    const handleScheme = (e) =>{
        dispatch(fetchNewAccData('https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/getCreParaGovAccountData?','','','','','',''))
        setproValue(e)
        setSchemeCode(e.value)
        dispatch(areaSchemeDateSetter({...AreaSchemeDateSetRed,schemeCode : e.value}))
       dispatch(fetchHomeColData('Form-101',AuditTypeSetRed.auditType,AreaSchemeDateSetRed.area,e.value))
    }

    useEffect(()=>{
        setschemeRed([...getSchemeData.val])
    },[getSchemeData])

    const handleDateChange = (e) =>{

        dispatch(areaSchemeDateSetter({...AreaSchemeDateSetRed,currDate : e.target.value}))
        setminDate(e.target.value)
    }

    const handleDateChange2 = (e) =>{
        dispatch(areaSchemeDateSetter({...AreaSchemeDateSetRed,currDate2 : e.target.value}))
        setmaxDate(e.target.value)
    }

    const handleType = (e) =>{
        // dispatch(fetchAreaData(solId,e.value))
        dispatch(areaSchemeDateSetter({...AreaSchemeDateSetRed,type : e.value}))
    }

    const handleFreq = (e) =>{
        dispatch(areaSchemeDateSetter({...AreaSchemeDateSetRed,freq : e.value}))
    }

    return (
        <div className='d-flex justify-content-between'>

{/* <div style={{width:'10vw',display:'inline-block',maxWidth:'10vw'}} >
    {
getDDData.loading ? <Spinner/> : <Select
onChange={(e)=>{
    handleType(e)
    // setSchemeCode(e.value)
}}
options={getDDData.val.filter((fil)=>{
    return fil.filterName ==='Type'
}).map((res)=>{return{'value':res.dropdownValue,'label':res.dropdownTitle}})}
placeholder='Type...'

styles={{
    // Fixes the overlapping problem of the component
    menu: provided => ({ ...provided, zIndex: 9999})
  }} 
  />
    }
</div> */}
<div style={{width:'8vw',display:'inline-block',maxWidth:'9vw'}} className ='mx-1' >
<label for='area'>Area:</label>
    {
area&&<Select
id='area'
onChange={(e)=>{
    handleArea(e)
    // setSchemeCode(e.value)
}}
options={area.map((res)=>{return{'value':res.schemeName,'label':res.schemeName}})}
placeholder='Select Area...'

styles={{
    // Fixes the overlapping problem of the component
    menu: provided => ({ ...provided, zIndex: 9999})
  }} 
  />
    }
</div>
{/* <div style={{width:'9vw',display:'inline-block',maxWidth:'9vw'}} >
    {
getDDData.loading ? <Spinner/> : <Select
onChange={(e)=>{
    handleFreq(e)
    // setSchemeCode(e.value)
}}
options={getDDData.val.filter((fil)=>{
    return fil.filterName ==='Frequency'
}).map((res)=>{return{'value':res.dropdownValue,'label':res.dropdownTitle}})}
placeholder='Frequency...'

styles={{
    // Fixes the overlapping problem of the component
    menu: provided => ({ ...provided, zIndex: 9999})
  }} 
  />
    }
</div> */}
<div style={{width:'9vw',display:'inline-block',maxWidth:'9vw'}} className ='mx-1'>
    <label for='product'>Product:</label>
    {
schemeRed&&<Select
id='product'
onChange={(e)=>{
    handleScheme(e)
    // setSchemeCode(e.value)
}}
options={schemeRed.map((res)=>{return{'value':res.schemeName,'label':res.schemeName}})}
placeholder='Select Product...'
styles={{
    // Fixes the overlapping problem of the component
    menu: provided => ({ ...provided, zIndex: 9999})
  }} 
  value={proValue}
  />
    }
</div>
<div style={{width:'8vw',display:'inline-block',maxWidth:'9vw'}} className ='mx-1'>
<label for='fromDate'>From Date:</label>
<input id='fromDate' type={'date'} max={maxDate === null || maxDate === '' ? lastDateOfMonth.toString() : maxDate } min={firstDateOfMonth.toString()} className='form-control clearBtn' onChange={(e)=>{handleDateChange(e)}} title='From Date...' />
</div>

<div style={{width:'8vw',display:'inline-block',maxWidth:'9vw'}} className='mx-1'>
    <label for='toDate'>To Date:</label>
<input id='toDate' type={'date'} min={minDate===null || minDate==='' ? firstDateOfMonth.toString() : minDate} max={lastDateOfMonth.toString()} className='form-control clearBtn' onChange={(e)=>{handleDateChange2(e)}}
title='To Date...'
/>
</div>



                    {/* <select className='style-scheme form-control'  onChange = {obj => setSchemeCode(obj.target.value)} >
                        <option value="">Select Product</option>
                        <option value="All">Select All</option>
                        {scheme && scheme.map((sch) => (
                        <option value={sch.schemeName}>{sch.schemeName}</option>
          ))}
                </select> */}
        </div>
    )
}

export default HomeFilters
