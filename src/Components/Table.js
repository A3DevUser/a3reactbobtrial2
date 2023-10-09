import React, { useEffect,
  // useMemo, 
  useState } from 'react'
import { useTable,useSortBy,
  // useGlobalFilter,usePagination,
  useFilters,useBlockLayout} from 'react-table'
import { Styles } from './TableStyles'
// import styled from 'styled-components'
import { useSticky } from 'react-table-sticky'
import './Table.css'
// import Select from 'react-select'
import {ColumnFilter} from './ColumnFilter'
import { useDispatch, useSelector } from 'react-redux'
import { OutputDataFileSetter,
  //  OutputDataSetter, 
   SubmitDataSetter } from '../actions/OutputDataSetter'
import { downloadFile } from '../actions/FileDownloadAct'
import getCellStyles from './GetCellStyles'
// import { fetchTableAccData } from '../actions/AccountDataTable'
// import { MainPartyDataSetter } from '../actions/MainPartyData'


const Table = ({columnData,TableData,accData,outputData,auditId,schemeCode,userId,accDetails,SubmitData,newHead,outputId}) => {
  // const[accountData,setaccountData]=useState([])
  // const[testData,settestData]=React.useState([])
  const[outputdata,setoutputdata]=React.useState([...outputData])
  // const[loading,setloading]=useState(false)
  const[loader,setloader]=useState(true)
  // const[myStyle,setmyStyle]=useState()
  const[cellArray,setcellArray]=useState([])
  // const[finalCellArray,setfinalCellArray]=useState([])
  const[myfiles,setMyFiles]=useState([])
  const MainPartyDataRed = useSelector((state)=>state.MainPartyDataRed)
  const OutputDataMainFileSetRed = useSelector((state)=>state.OutputDataMainFileSetRed)
  const OutputDataFileSetRed = useSelector((state)=>state.OutputDataFileSetRed)
  const getDDData = useSelector((state)=>state.getDDData)




  const dispatch = useDispatch()

  // useEffect(()=>{
  //   console.log(columnData)
  // },[])





  // useEffect(()=>{
  //   axios.get('https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/AccData')
  //   .then((res)=>{setaccountData(res.data)})
  //   .catch((err)=>{console.log(err)})

  //   axios.get('https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/TestData')
  //   .then((res)=>{settestData(res.data)})
  //   .catch((err)=>{console.log(err)})

  //   axios.get('https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/OutputData')
  //   .then((res)=>{setoutputData(res.data)})
  //   .catch((err)=>{console.log(err)})
  // },[])

  // useEffect(()=>{
  //   testData.map((res)=>{
  //    return outputData.map((oRes)=>{
  //     if(res.testRef===oRes.testId){
  //          res['result$#'+oRes.accountId]=oRes.result
  //          res['remark$#'+oRes.accountId]=oRes.remarks
  //     }
  //    })
  //   })
  // },[accountData,outputData,testData])


    const EditableCell = ({
        value: initialValue,
        row: { index },
        column: { id },
        updateMyData, 
      }) => {
        const [value, setValue] = React.useState(initialValue)
      
        const onChange = e => {
          setValue(e.target.value)
          // console.log(columns)
        }
      
        const onBlur = () => {
          updateMyData(index, id, value)
        }
      
        React.useEffect(() => {
          setValue(initialValue)
        }, [initialValue])

        updateMyData = (rowIndex, columnId, value) => {
            setdata(old =>
              old.map((row, index) => {
                if (index === rowIndex) {
                  return {
                    ...old[rowIndex],
                    [columnId]: value,
                  }
                }
                return row
              })
            )
          }

      
        return <div>
          <textarea value={value} className='form-control' style={{width:'10vw'
          // , background : value ? '#28a745' : 'white', color : 'white',
          }} onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' />
          {/* xyz */}
        </div>
      }

      const EditableDdCell = ({
        value: initialValue,
        row: { index },
        column: { id },
        updateMyData, 
      }) => {
        const [value, setValue] = React.useState(initialValue)
      
        const onChange = e => {
          setValue(e.target.value)
        }
      
        const onBlur = () => {
          updateMyData(index, id, value)
        }
      
        React.useEffect(() => {
          setValue(initialValue)
        }, [initialValue])

        updateMyData = (rowIndex, columnId, value) => {
            setdata(old =>
              old.map((row, index) => {
                if (index === rowIndex) {
                  return {
                    ...old[rowIndex],
                    [columnId]: value,
                  }
                }
                return row
              })
            )
          }
      
        return <select value={value} onChange={onChange} onBlur={onBlur} className='custom-select' style={{width:'5vw',height:'7vh'}}>
          {
            getDDData.val.sort((a,b)=>{return a.id - b.id}).map((res)=>{
              return <option value={res.dropdownValue}>{res.dropdownTitle}</option>
            })
          }
            {/* <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>
            <option value="NA">Na</option> */}
               </select>
      }

      const EditableNumCell = ({
        value: initialValue,
        row: { index },
        column: { id },
        updateMyData, 
      }) => {
        const [value, setValue] = React.useState(initialValue)
      
        const onChange = e => {
          setValue(e.target.value)
        }
      
        const onBlur = () => {
          updateMyData(index, id, value)
        }
      
        React.useEffect(() => {
          setValue(initialValue)
        }, [initialValue])

        updateMyData = (rowIndex, columnId, value) => {
            setdata(old =>
              old.map((row, index) => {
                if (index === rowIndex) {
                  return {
                    ...old[rowIndex],
                    [columnId]: value,
                  }
                }
                return row
              })
            )
          }

      
        return <div>
          <input value={value} type={'number'} className='form-control' style={{width:'10vw'}} onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' />
          {/* xyz */}
        </div>
      }

      const EditableDateCell = ({
        value: initialValue,
        row: { index },
        column: { id },
        updateMyData, 
      }) => {
        const [value, setValue] = React.useState(initialValue)
      
        const onChange = e => {
          setValue(e.target.value)
        }
      
        const onBlur = () => {
          updateMyData(index, id, value)
        }
      
        React.useEffect(() => {
          setValue(initialValue)
        }, [initialValue])

        updateMyData = (rowIndex, columnId, value) => {
            setdata(old =>
              old.map((row, index) => {
                if (index === rowIndex) {
                  return {
                    ...old[rowIndex],
                    [columnId]: value,
                  }
                }
                return row
              })
            )
          }

      
        return <div>
          <input value={value} type={'date'} className='form-control' style={{width:'100vw'}} onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' />
          {/* xyz */}
        </div>
      }


    

    const [data,setdata]=React.useState([...TableData])
    // const[splitAcc,setsplitAcc]=useState([...accData])
    // const[splitted,setsplitted]=useState([]) 
    const[accDData,setaccDData]=React.useState([...accData])
    // const[selSheetOpList,setselSheetOpList]=useState([])
    // const[accOpList,setaccOpList]=React.useState([...accData.map((res)=>{return {label:res,value:res}})])
    const getTableAccountData = useSelector((state)=>state.getTableAccountData)

    


    const [columns,setcolumns]=React.useState([
      ...accDData.map((res,i)=>{
        if(i===0){
          return{
            Header : res,
            columns : [...columnData].filter((fil)=>{return fil.parentCell==='Test Details'}).map((Ares)=>{

                return{
                    Header : Ares.fieldName,
                    accessor : Ares.accessor,
                    sticky :'left',
                    width : Ares.width,
                    // disableFilters : true
                }
            }),
            sticky :'left',

        }
        }else{
          return{
              Header : res,
              columns : [...columnData].filter((fil)=>{return fil.parentCell==='Account'}).map((Ares)=>{

                if(Ares.cellType==='textArea'){
                  return {
                      Header : Ares.fieldName,
                      accessor : Ares.accessor+'$#'+res,
                      Cell:EditableCell,
                      width : Ares.width,
                  }
              }else if(Ares.cellType==='number'){
                  return {
                      Header : Ares.fieldName,
                      accessor : Ares.accessor+'$#'+res,
                      Cell:EditableNumCell,
                      width:Ares.width,

                  }
              }else if(Ares.cellType==='date'){
                  return {
                      Header : Ares.fieldName,
                      accessor : Ares.accessor+'$#'+res,
                      Cell:EditableDateCell,
                      width:Ares.width,

                  }
              }else if(Ares.cellType==='dropDown'){
                  return {
                      Header : Ares.fieldName,
                      accessor : Ares.accessor+'$#'+res,
                      Cell:EditableDdCell,
                      width:Ares.width,

                  }
              }
              else{
                  return {
                      Header : Ares.fieldName,
                      accessor : Ares.accessor+'$#'+res,
                      width:Ares.width,
                  }
              }
              })
          }
        }
      })
        ])




useEffect(()=>{
    TableData.map(
      old =>
      {
        return outputData.map(
          oldOd =>{
            if(old.testRef===oldOd.testId){
              old['result$#'+oldOd.accountId]=oldOd.result
           old['remarks$#'+oldOd.accountId]=oldOd.remarks
           old['attachment$#'+oldOd.accountId]=oldOd.attachment
            }
          }
        )
      }
    )
    setloader(false)
          },[outputdata])

                  // Object.assign(columns[0],{columns: [{Header:'Process',accessor:'process'},{Header:'Sub Process',accessor:'subProcess'},{Header:'Test', accessor:'testTitle'}]})
                  
          //        for (let i = 1; i < columns.length; i++) {
          //         columns[i].columns.map((res)=>{return res.accessor.substring(0,6)===`remark` ? res['Cell']= EditableCell : res.accessor.substring(0,6)===`result` ?
          //         res['Cell']= EditableDdCell: null
          //     })        
          // }
          

          // const colourStyles = {
          //   menuPortal: provided => ({ ...provided, zIndex: 9999,width: "12vw"}),
          //   menu: provided => ({ ...provided, zIndex: 9999, width: "12vw"})
          // };

  useEffect(()=>{
    setcolumns([
      ...accDData.map((res,i)=>{
        if(i===0){
          return{
            Header : res,
            columns : [...columnData].filter((fil)=>{return fil.parentCell==='Test Details'}).map((Ares)=>{

                return{
                    Header : Ares.fieldName,
                    accessor : Ares.accessor,
                    sticky :'left',
                    width : Ares.width,
                    // disableFilters : true
                }
            }),
            sticky :'left',

        }
        }else{
          return{
              Header : res,
              columns : [...columnData].filter((fil)=>{return fil.parentCell==='Account'}).map((Ares)=>{

                if(Ares.cellType==='textArea'){
                  return {
                      Header : Ares.fieldName,
                      accessor : Ares.accessor+'$#'+res,
                      Cell:EditableCell,
                      width : Ares.width,
                  }
              }else if(Ares.cellType==='number'){
                  return {
                      Header : Ares.fieldName,
                      accessor : Ares.accessor+'$#'+res,
                      Cell:EditableNumCell
                  }
              }else if(Ares.cellType==='date'){
                  return {
                      Header : Ares.fieldName,
                      accessor : Ares.accessor+'$#'+res,
                      Cell:EditableDateCell
                  }
              }else if(Ares.cellType==='dropDown'){
                  return {
                      Header : Ares.fieldName,
                      accessor : Ares.accessor+'$#'+res,
                      Cell:EditableDdCell
                  }
              }
              else{
                  return {
                      Header : Ares.fieldName,
                      accessor : Ares.accessor+'$#'+res,
                      width:Ares.width,
                  }
              }
              })
          }
        }
      })
  ])
  },[accDData])

    // useEffect(()=>{
    //     for (let i = 0; i < splitAcc.length; i++) {
    //         if(i===0){
    //             splitted.push(['Test Details',...splitAcc.splice(0,10)])
    //         }else{
    //             splitted.push(['Test Details',...splitAcc.splice(0,10)])
    //         }
    //     }
    //     setselSheetOpList(
    //         splitted.map((res,i)=>{
    //             return {label:i,value:i}
    //         })
    //     )
    //     setaccDData([...splitted[0]])

    // },[])

    // let obj= {}

    // const handleDataChange = (val,cell)=>{
    //   obj['objective']=cell.row.original.objective
    //   obj['process']=cell.row.original.process
    //   obj['subProcess']=cell.row.original.subProcess
    //   obj['testId']=cell.row.original.testRef
    //   obj['testTitle']=cell.row.original.testTitle
    //   obj['accountId']=cell.column.parent.id
    //   obj['auditId']=auditId
    //   obj['userId'] = userId
    //   obj['schemeCode']=schemeCode
    //   obj[cell.column.id.includes('remarks') ? 'remarks' : cell.column.id.includes('result') ? 'result':'attachment']=val
    //   if(cell.column.id.includes('result')){
    //     Object.assign(obj,{remarks:cell.row.cells.filter((fil)=>{
    //       return fil.column.id===`remarks$#${cell.column.parent.id}`})[0].value,attachment:cell.row.cells.filter((fil)=>{
    //         return fil.column.id===`attachment$#${cell.column.parent.id}`})[0].value})
    //   }else if(cell.column.id.includes('remarks')){
    //     Object.assign(obj,{result:(cell.row.cells.filter((fil)=>{
    //       return fil.column.id===`result$#${cell.column.parent.id}`})[0].value) ===null ||
    //       (cell.row.cells.filter((fil)=>{
    //         return fil.column.id===`result$#${cell.column.parent.id}`})[0].value) === undefined
    //       ? 'Pass' :
    //       (cell.row.cells.filter((fil)=>{
    //         return fil.column.id===`result$#${cell.column.parent.id}`})[0].value),
          
    //       attachment:cell.row.cells.filter((fil)=>{
    //         return fil.column.id===`attachment$#${cell.column.parent.id}`})[0].value})
    //   }else if(cell.column.id.includes('attachment')){
    //     Object.assign(obj,{result:(cell.row.cells.filter((fil)=>{
    //       return fil.column.id===`result$#${cell.column.parent.id}`})[0].value) ===null ||
    //       (cell.row.cells.filter((fil)=>{
    //         return fil.column.id===`result$#${cell.column.parent.id}`})[0].value) === undefined
    //       ? 'Pass' :
    //       (cell.row.cells.filter((fil)=>{
    //         return fil.column.id===`result$#${cell.column.parent.id}`})[0].value),
            
    //         remarks:cell.row.cells.filter((fil)=>{
    //         return fil.column.id===`remarks$#${cell.column.parent.id}`})[0].value})
    //   }
    //   setcellArray(old=>{return[...old,obj]})
    // }

    
    // useEffect(()=>{
    //   setfinalCellArray(old =>
    //     {
    //       return [...old,
    //         cellArray.reduce((acc,curr)=>{
    //           if(acc.accountId===curr.accountId && acc.testTitle===curr.testTitle){
    //              return Object.assign(acc,curr)
    //           }else{
    //             return curr
    //           }
    //         },{})
    //       ]
    //     }
    // )
    // },[cellArray])
    
    // useEffect(()=>{
    // dispatch(OutputDataSetter(finalCellArray))
    // dispatch(SubmitDataSetter(rows))
    // },[finalCellArray])

//  const handleSubmit =()=>{
//       rows.map((res)=>{
//         res.cells.map((cRes)=>{console.log(cRes)}).filter((cResFil)=>{
//           return cResFil.value !==null
//         })
//       })
//     }

useEffect(()=>{
  dispatch(SubmitDataSetter(rows))
},[data])

const updateMyAttachData = (rowIndex, columnId, value,formDataValue,cell) => {
      
  // console.log(formDataValue)
  // const formData = new FormData()
  // formData.append('file',formDataValue)
  myfiles.push(formDataValue)
  // console.log(myfiles)
  dispatch(OutputDataFileSetter(myfiles))

    setdata(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]:  formDataValue[0].name,
          }
        }
        return row
      })
    )

    // handleDataChange(formDataValue[0].name,cell)
  }

  useEffect(()=>{
    if(MainPartyDataRed !==null){
    let nnArr =[]

    MainPartyDataRed.map((res)=>{
      const ObjInd = data.findIndex(x => ((x.accountId===res.accountId)&&(x.testRef
        ===res.testRef
        )))
      data.splice(ObjInd,1,res)
    })
    nnArr=[...data] 
    setdata(nnArr)
    setcellArray( old =>[...old,...MainPartyDataRed])
    
  }
  },[MainPartyDataRed])

  useEffect(()=>{
    if(OutputDataFileSetRed === null){
      dispatch(OutputDataFileSetter(OutputDataMainFileSetRed))
    }else if(OutputDataMainFileSetRed===null){
      dispatch(OutputDataFileSetter(OutputDataFileSetRed))
    }
    else{
      dispatch(OutputDataFileSetter([...OutputDataFileSetRed ,...OutputDataMainFileSetRed]))
    }
  },[OutputDataMainFileSetRed])

  const handleFileDown = (val) =>{
    // axios({
    //   url: `https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/downloadFile/${val}`,
    //   method: 'GET',
    //   responseType: 'blob', // important
    //   // origins: `http://localhost:3000`
    // })
    // .then((response) => {
    //     const url = window.URL.createObjectURL(new Blob([response.data]));
    //     // console.log(url)
    //     const link = document.createElement('a');
    //     link.href = url;
    //     link.setAttribute('download', `${val}`); //or any other extension
    //     document.body.appendChild(link);
    //     link.click();
    // });
    dispatch(downloadFile(val))

  }

  // useEffect(()=>{
  //   console.log(columns)
  // },[data])

    const defaultColumn = {
      Filter : ColumnFilter
  }

    const tableInstance = useTable({
        columns,
        data,
        defaultColumn
    },useBlockLayout,useSticky,useFilters,useSortBy)

    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow}=tableInstance

  return (
    <>
     {
      getTableAccountData.loading ? <p>Loading...</p> :
      <Styles>
      <div {...getTableProps()} className="table sticky" style={{ width: '98vw', height: '85vh' }}>
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div {...column.getHeaderProps(column.getSortByToggleProps())} className="th">
                  {column.parent || column.Header==='Test Details' ? column.render('Header') : <p 
                  // title={
                  //  JSON.stringify(accDetails.filter((fil)=>{
                  //     return fil.id === column.render('Header')
                  //   }).map((res)=>{
                  //     return {
                  //        'Sanction Date' : res.sanctionDate,
                  //        'Customer Id' : res.customerId,
                  //        'Limit' : res.limit,
                  //        'Out Standing Amount' : res.outstandingAmt,
                  //     }
                      
                  //   })).replace('[','').replace(']','').replace('{','').replace('}','').replace(/,/g,'\n')
                  // }
                  >
                    {
                        newHead.map((res)=>{
                          if(res.storeValue==='id'){
                            return <><span>{res.header +': '+ column.render('Header')}</span><br/></>
                          }else if(res.storeValue==='customerName'){
                            return <><span>{res.header+': '+accDetails.filter((fil)=>{
                              return fil.id === column.render('Header')
                            })[0].customerName}</span><br/></>
                          }
                            
                        })
                    }
                        </p>
                        }
                  <div>{column.canFilter ? column.render('Filter'):null}</div>
                        <span>
                            {column.isSorted ? (column.isSortedDesc ? '🔽' :'🔼'):''}
                        </span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()} className="body">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => {
                  if((cell.value===null || cell.value===undefined)&&cell.column.id.includes('attachment')){
                    return <div {...cell.getCellProps()} className='td' > <input  type="file"  onChange={(e)=>{updateMyAttachData(Number(cell.row.id),cell.column.id,e.target.value,e.target.files,cell)}}/> </div>
                  }else{
                    return <div {...cell.getCellProps()} className='td' 
                    // onBlur={(e)=>{handleDataChange(e.target.value,cell)}}
                    >
                      {cell.column.id.includes('attachment') ? <p className='fileLink' onClick={(e)=>{handleFileDown(cell.value)}}>{cell.render('Cell')}</p> : cell.render('Cell') }
                      </div>
                  }
          })}
              </div>
            );
          })}
        </div>
      </div>
    </Styles>}
    </>
  )
}

export default Table