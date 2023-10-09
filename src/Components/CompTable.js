import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useTable,useBlockLayout } from 'react-table'
import { Styles } from './TableStyles'

const CompTable = ({colData,tableD}) => {
    const getDDData = useSelector((state)=>state.getDDData)

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
          <textarea value={value} className='form-control' style={{width:'10vw'}} onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' />
          {/* xyz */}
        </div>
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
                width : Ares.width,
            }
        }else if(Ares.cellType==='number'){
            return {
                Header : Ares.fieldName,
                accessor : Ares.accessor,
                Cell:EditableNumCell,
                width:Ares.width,

            }
        }else if(Ares.cellType==='date'){
            return {
                Header : Ares.fieldName,
                accessor : Ares.accessor,
                Cell:EditableDateCell,
                width:Ares.width,

            }
        }
        else{
            return {
                Header : Ares.fieldName,
                accessor : Ares.accessor,
                width:Ares.width,
            }
        }
    }))

    const handleSubmit = ()=>{
        console.log(data)
    }

    const tableInstance = useTable({
        columns,
        data
    },useBlockLayout)

const {getTableProps,getTableBodyProps,headerGroups,prepareRow,rows} = tableInstance

  return (
    <>
    <button onClick={handleSubmit}>Send For Approval</button>
    <Styles>
      <div {...getTableProps()} className='table'>
        <div className='thead'>
            {
                headerGroups.map((headerGroup)=>(
            <div className='tr' {...headerGroup.getHeaderGroupProps()}>
                {
                    headerGroup.headers.map((column)=>(
                        <div className='th' {...column.getHeaderProps()}>{column.render('Header')}</div>
                    ))
                }
            </div>
                ))
            }
        </div>
        <div className='tbody' {...getTableBodyProps()}>
            {
                rows.map((row)=>{
                    prepareRow(row)
                    return   <div className='tr' {...row.getRowProps()}>
                        {
                            row.cells.map((cell)=>(
                                <div className='td' {...cell.getCellProps()}>{cell.render('Cell')}</div>
                            ))
                        }
                </div>
                })
            }

        </div>
      </div>
      </Styles>
    </>
  )
}

export default CompTable
