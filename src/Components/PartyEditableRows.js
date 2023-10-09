import React,{ useState,useEffect } from 'react'
import { useHistory } from "react-router-dom";
import data from './data.json'
import axios from 'axios'

const PartyEditableRows = ({ testuniqueId,testId,testName,accountId,account, id,onResChange,savedData,auditId,sheetId,outputData,setInitialData,initialData,userId,setAccountResponseCount,accountResponseCount,setResChanged,resChanged,setOutputData,accountScheme,setIsFailed}) => {

     const updateId = auditId+testuniqueId+accountId;
     const [res,setRes] = useState('Pass');
     const[rem,setRem] = useState('');
     const[myStyle,setMyStyle] = useState();
     const[updateFlag,setUpdateFlag] = useState(false);
     const[initialResult,setInitialResult] = useState('Pass')
     const[initialRemarks,setInitialRemarks] = useState()
     let result;
     let remarks;
     
     function findOccRes(arr, key, value){

      arr.forEach((x)=>{
              if(updateId == x.id){
              x[key] = value;
              }
      })
       return arr
    }

     const handleResOnChange = (e) => {
        e.preventDefault();
        setRes(e.target.value)
        setInitialData(findOccRes(initialData,'result',e.target.value))
        setOutputData(findOccRes(outputData,'result',e.target.value))
        setResChanged(resChanged + 1)
        if(e.target.value == 'Fail' && rem == '')
        {
           setMyStyle({
            backgroundColor: '#e00719'
                     })

            setIsFailed(true)
        }
        else{
         setMyStyle({
            backgroundColor: '#ffffe7'
                     })

         setIsFailed(false)
        }
     }

     const handleRemOnChange = (e) => {
      alert(e)
        e.preventDefault();
        setInitialData(findOccRes(initialData,'remarks',e.target.value))
        setOutputData(findOccRes(outputData,'remarks',e.target.value))
        if(e.target.value == '' && res == 'Fail')
        {
           alert('Please Enter the remarks!')
           setMyStyle({
            backgroundColor: '#e00719'
                     })
            setIsFailed(true)

        }
        else{
         setMyStyle({
            backgroundColor: '#ffffe7'
                     })
         setIsFailed(false)
        }
     }

     useEffect(()=>{
         var flag = true;
         outputData.map((op) => {
            
            if(op.id == updateId)
            {
               setRes(op.result)
               setRem(op.remarks)
               flag = false
               setInitialData(initialData => [...initialData,{
                  id: updateId,
                  testId: testId,
                  accountId: accountId,
                  result: op.result,
                  remarks: op.remarks,
                  userId: userId,
                  auditId: auditId,
                  status: 'In Progress',
                  testTitle: testName,
                  schemeCode: accountScheme,
                  timeSt:'',
                  isFinCreated:'0'
          }])
               return
            }})
            if(flag == true)
            {
               setInitialData(initialData => [...initialData,{
                          id: updateId,
                          testId: testId,
                          accountId: accountId,
                          result: 'Pass',
                          remarks: '',
                          userId: userId,
                          auditId: auditId,
                          status: 'In Progress',
                          testTitle: testName,
                          schemeCode: accountScheme,
                          timeSt:'',
                          isFinCreated:'0'
                  }])
               
               setRes('Pass')
               setRem('')
     }         
    //  setResChanged(resChanged + 1)
   },[updateId])
  
    return (
      <>
      <td className="tr-small">
      <select   onInput = {handleResOnChange} value = {res} onChange = {obj => setRes(obj.target.value)} >
      <option value="Pass">Pass</option>
      <option value="Fail">Fail</option>
      <option value="NA">NA</option>
      <option value="Spot Rectification">SR</option>
      </select>
      </td>
      <td className='tr-mid' style={myStyle}>
          <textarea rows="3" cols = "20" onInput = {handleRemOnChange} placeholder = 'Enter Remarks' value = {rem} onChange = {obj => setRem(obj.target.value)} style={myStyle} />
      </td>
      </>
    )
}

export default PartyEditableRows
