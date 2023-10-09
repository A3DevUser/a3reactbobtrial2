import  { useEffect, useState } from 'react'
import { useBlockLayout, useTable } from 'react-table'
import { Styles } from './TableStyles'
import './TableStyle.css'
import { ColumnHeader } from './ColumnHeader'
import TableStruc from './TableStruc'
import axios from 'axios'
import { useSticky } from 'react-table-sticky'


const Table = ({col,dData,accArr}) => {
  const [data,setdata]=useState([...dData])
  const [fileArr,setfileArr] =useState()
  const [chngRow,setchngRow]=useState({})

  const opData = [{"id":"auditIdAAA-SD0015520390400041555","applicableAna":"0","attachment":null,"auditId":"auditId","cunDate":null,"accId":"20390400041555","isFinCreated":null,"marksObtCalc":"0","maxVal":"5","objective":"Objective","portfolio":null,"process":"Deposits","remarks":"vishalabcd","response":"0","result":null,"riskRef":null,"status":null,"testRef":"AAA-SD00155","testTitle":"While accepting term deposit exceeding Rs 50,000 from an existing customer PAN (Form 60/61 regardless of mode of transaction  (i.e cash/transfer) is obtained ","userId":null},{"id":"auditIdAAA-SD0016020390400041555","applicableAna":"3","attachment":null,"auditId":"auditId","cunDate":null,"accId":"20390400041555","isFinCreated":null,"marksObtCalc":"3","maxVal":"3","objective":"Objective","portfolio":null,"process":"Deposits","remarks":"ashgdjhasdg","response":"3","result":null,"riskRef":null,"status":null,"testRef":"AAA-SD00160","testTitle":"Claims for Settlement of assets of deceased constituent were settled without delay","userId":null},{"id":"auditIdAAA-SD0016120390400043601","applicableAna":"4","attachment":null,"auditId":"auditId","cunDate":null,"accId":"20390400043601","isFinCreated":null,"marksObtCalc":"2","maxVal":"4","objective":"Objective","portfolio":null,"process":"Deposits","remarks":"sdjaghdjasgdaj","response":"2","result":null,"riskRef":null,"status":null,"testRef":"AAA-SD00161","testTitle":"Pref. Interest on deposit  accounts correctly fed and authority on the record.","userId":null},{"id":"auditIdAAA-SD0016220390400041555","applicableAna":null,"attachment":null,"auditId":"auditId","cunDate":null,"accId":"20390400041555","isFinCreated":null,"marksObtCalc":null,"maxVal":"5","objective":"Objective","portfolio":null,"process":"Deposits","remarks":"sadjgjhgadsgda","response":null,"result":null,"riskRef":null,"status":null,"testRef":"AAA-SD00162","testTitle":"Nomination facility has been extended. In case the Account Holder does not desire Nomination, his specific intent thereto is recorded and cross-checked with the report on accounts without Nominations.","userId":null}]

  useEffect(()=>{
    const colKey =  col.filter((cres)=>{return cres.parentCell==='account'}).map((res)=>{return res.accessor})
    const accKey = opData.map((res)=>{ return res.accId})

    accArr.forEach((res)=>{
      colKey.map((cres)=>{
        // console.log(cres+'$#'+res.id)
        data.forEach((dres)=>{
          dres[cres+'$#'+res.id] = dres[cres]
        })
      })
    })



opData.map((res, i) => {
      colKey.forEach((cres) => {
        res[cres + '$#' + accKey[i]] = res[cres];
      });
    })


const mergedObjects = {};
// Iterate through the array and merge objects with the same ID
opData.forEach((obj) => {
  const id = obj.testRef;

  if (!mergedObjects[id]) {
    // If the ID is not in the mergedObjects, create a new entry
    mergedObjects[id] = { ...obj };
  } else {
    // If the ID is already in the mergedObjects, merge the properties
    Object.assign(mergedObjects[id], obj);
  }
});

// Convert the mergedObjects back to an array
const mergedArray = Object.values(mergedObjects)
mergedArray.forEach(res => colKey.forEach(cres => delete res[cres]))
console.log(mergedArray);  

setdata(data.map((res,i)=>{
  const obj1 = data[i];
  console.log(data[i])
  const obj2 = mergedArray.find((mres)=>mres.testRef === obj1.testId)


  function mergeObjects(obj1, obj2) {
    const result = {};
  
    // Iterate over obj1 properties
    for (const key in obj1) {
      if (obj1.hasOwnProperty(key) && obj1[key] !== undefined) {
        result[key] = obj1[key];
      }
    }
  
    // Iterate over obj2 properties
    for (const key in obj2) {
      if (obj2.hasOwnProperty(key) && obj2[key] !== undefined) {
        result[key] = obj2[key];
      }
    }
  
    return result;
  }
  

  if(obj2){
    return mergeObjects(data[i], obj2)
    
  }else{
    return data[i]
  }

}))

},[])

const formData = new FormData()
  const updateMyData = (rowIndex, columnId, value, fileData,parentId,isCal) => {
if(fileData){
  formData.append('file',fileData)
  setfileArr(formData)
}
if(isCal){
  setdata(old =>
    old.map((row, index) => {
      if (index == rowIndex) {
        if(value==0){
          return {
            ...old[rowIndex],
            [Object.keys(data[rowIndex]).filter((fil)=>{return fil.includes(`Calc$#${parentId}`)})[0]]: value,
            [Object.keys(row).filter((fil)=>{return fil.includes(`Ana$#${parentId}`)})[0]]: 0
          }
        }else{
          return {
            ...old[rowIndex],
            [Object.keys(data[rowIndex]).filter((fil)=>{return fil.includes(`Calc$#${parentId}`)})[0]]: value,
            [Object.keys(data[rowIndex]).filter((fil)=>{return fil.includes(`Ana$#${parentId}`)})[0]]: 
            row[
              Object.keys(row).filter((fil)=>{return fil.includes('$#')}).filter((fil)=>{return fil.includes('max')})[0]]
          }
        }
        
      }
      return row
    })
  )
 
}
    setchngRow({rowIndex,parentId})
    setdata(old =>
      old.map((row, index) => {
        if (index == rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
            ['accId'] :parentId,
            ['auditId'] : 'auditId'
          }
        }
        return row
      })
    )
  }

  useEffect(()=>{
    console.log(fileArr)
  },[fileArr])

  const handleSave = () =>{

    axios.post(`https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/SetOutputNonSample`,fileArr)
    .then((res)=>{
alert(JSON.stringify(res.data.message))          // console.log(JSON.stringify(res.data))
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const parentHeader = [
    {title:'test',storeVal :'test'},{title:'account',storeVal:'account'}
  ]

    const[columns]=useState(ColumnHeader(col,parentHeader,updateMyData,data.map((res)=>{return{id:res.id,dropDown :res.dropDown, logicDd : res.logic, mixVal : res.mixVal}}),accArr,))

      useEffect(()=>{
        if(chngRow.rowIndex){
          const obj ={...data[chngRow.rowIndex]}
           Object.keys(obj).filter((fil)=>{return fil.includes('$#')}).filter((fil)=>{return !fil.includes(chngRow.parentId)}).forEach((res)=>{ delete obj[res] })
          Object.keys(obj).filter((fil)=>{return fil.includes('$#')}).forEach((res)=>{obj[res.split('$#')[0]]=obj[res]; delete obj[res]})

          obj = {...obj,...accArr.filter((fil)=>{ return fil.id == obj.accId})[0]}

          console.log(JSON.stringify(obj))

         const newObj =Object.keys(obj).filter((fil)=>{return obj[fil] !== null}).map((res)=>{return {[res] : obj[res]}}).reduce((accumulator, currentObject) => {
            // Use the spread operator to merge the objects
            return { ...accumulator, ...currentObject };
          }, {})

          console.log(newObj)

      //     axios({
      //       method: "PUT",
      //       url: `https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/SetOutputNonSample/`,
      //       data: [newObj]
  
      //   })
      //     .then((res)=>{
      // console.log(res.data)          // console.log(JSON.stringify(res.data))
      //     })
      //     .catch((err)=>{
      //       console.log(err)
      //     }) 
        }

console.log(data)
   
        },[data])
      

    const tableInstance = useTable({
        columns,
        data
    },useBlockLayout,useSticky)

const {getTableProps,getTableBodyProps,headerGroups,prepareRow,rows} = tableInstance
  return (
    <div>
      <button onClick={handleSave} >Submit</button>
      <Styles>
      <TableStruc getTableBodyProps={getTableBodyProps} getTableProps={getTableProps}  headerGroups={headerGroups} prepareRow={prepareRow} rows={rows}/>
      </Styles>
    </div>
  )
}

export default Table
