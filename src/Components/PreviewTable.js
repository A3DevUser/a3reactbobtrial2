import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTable,useBlockLayout } from 'react-table'
import { downloadFile } from '../actions/FileDownloadAct'
import { MainPartyDataSetter } from '../actions/MainPartyData'
import { OutputDataFileSetter, OutputMainDataFileSetter } from '../actions/OutputDataSetter'
import { PreStyles } from './TableStyles'


const PreviewTable = ({colData,tableD}) => {
  const[myfiles,setMyFiles]=useState([])
  const OutputDataFileSetRed = useSelector((state)=>state.OutputDataFileSetRed)
  const getDDData = useSelector((state)=>state.getDDData)

// alert(JSON.stringify(colData))
    

    const dispatch = useDispatch()

    const MainPartyDataRed = useSelector((state)=>state.MainPartyDataRed)

    const EditableCell = ({
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
          <textarea value={value} className='form-control' style={{width:'10vw'}} onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' />
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
      
        return <select value={value} onChange={onChange} onBlur={onBlur} className='custom-select' style={{width:'5vw',height:'7vh'}} defaultValue='Pass'>
          {
            getDDData.val.map((res)=>{
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

    const[data,setdata]=useState([...tableD])
    const[columns,setcolumns]=useState(colData.map((Ares)=>{
        if(Ares.cellType==='textArea'){
            return {
                Header : Ares.fieldName,
                accessor : Ares.accessor,
                Cell:EditableCell,
                width : 250
            }
        }else if(Ares.cellType==='number'){
            return {
                Header : Ares.fieldName,
                accessor : Ares.accessor,
                Cell:EditableNumCell,
                width:250

            }
        }else if(Ares.cellType==='date'){
            return {
                Header : Ares.fieldName,
                accessor : Ares.accessor,
                Cell:EditableDateCell,
                width:250

            }
        }else if(Ares.cellType==='dropDown'){
            return {
                Header : Ares.fieldName,
                accessor : Ares.accessor,
                Cell:EditableDdCell,
                width:250

            }
        }
        else{
            return {
                Header : Ares.fieldName,
                accessor : Ares.accessor,
                width:250
            }
        }
    }))

    
    useEffect(()=>{
        dispatch(MainPartyDataSetter([...data.map((res,i)=>{
            let obj = {
                'srNo' : res.srNo,
                'id':null,
                'objective':res.objective,
                'process':res.process,
                'subProcess' : res.subProcess,
                'testRef' : res.testId,
                'testTitle' : res.testTitle,
                'risk' : res.risk
            }
            obj['result$#'+res.accountId] = res.result
            obj['remarks$#'+res.accountId] = res.remarks
            obj['attachment$#'+res.accountId] = res.attachment
            
            return obj
            
        })]))
    },[data])

    const updateMyAttachData = (rowIndex, columnId, value,formDataValue,cell)=>{

      // console.log(cell)
      // console.log(formDataValue)
      const formData = new FormData()
      formData.append('file',formDataValue)
      myfiles.push(formDataValue)
      // console.log(myfiles)
      dispatch(OutputMainDataFileSetter(myfiles))


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
    }

    const handleFileDown = (val)=>{
        dispatch(downloadFile(val))
    }


    const tableInstance = useTable({
        columns,
        data
    },useBlockLayout)


const {getTableProps,getTableBodyProps,headerGroups,prepareRow,rows} = tableInstance

  return (
    <>
    <PreStyles>
      <div className="table sticky" style={{}} {...getTableProps()}>
        <div className='header'>
            {
                headerGroups.map((headerGroup)=>(
            <div {...headerGroup.getHeaderGroupProps()} className='tr'>
                {
                    headerGroup.headers.map((column)=>(
                        <div {...column.getHeaderProps()} className='th'>{column.render('Header')}</div>
                    ))
                }
            </div>
                ))
            }
        </div>
        <div className='body' {...getTableBodyProps()}>
            {
                rows.map((row)=>{
                    prepareRow(row)
                    return   <div className='tr' {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                  // <div {...cell.getCellProps()} className="td" onBlur={(e)=>{handleDataChange(e.target.value,cell)}}>
                  //   {cell.render('Cell')}
                  // </div>
                  if((cell.value===null || cell.value===undefined)&&cell.column.id.includes('attachment')){
                    return <div {...cell.getCellProps()} className='td'  > <input  type="file"   onChange={(e)=>{updateMyAttachData(Number(cell.row.id),cell.column.id,e.target.value,e.target.files,cell)}}/> </div>
                  }else{
                    return <div {...cell.getCellProps()} className='td' 
                    // onBlur={(e)=>{handleDataChange(e.target.value,cell)}}
                    >
                      {cell.column.id.includes('attachment') ? <p className='fileLink' onClick={(e)=>{handleFileDown(cell.value)}}>{cell.render('Cell')}</p> : cell.render('Cell') }
                      </div>
                  }
          })}
 
                        {/* {
                            row.cells.map((cell)=>(
                                <div className='td' {...cell.getCellProps()}>{cell.render('Cell')}</div>
                            ))
                        } */}
                </div>
                })
            }

        </div>
      </div>
    </PreStyles>
    </>
  )
}

export default PreviewTable
