import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { useTable, useGlobalFilter, useRowSelect, useBlockLayout,useSortBy,useFilters,usePagination } from 'react-table'
import { useSticky } from 'react-table-sticky'
import { ColumnFilter } from './ColumnFilter'
import { fetchColData } from '../actions/ColumnHeader'
import { useDispatch } from 'react-redux/es/exports'

const Hometable2 = ({col,tData}) => {

  const[finalData,setfinalData]=useState([])

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
            // setdata(old =>
            //   old.map((row, index) => {
            //     if (index === rowIndex) {
            //       return {
            //         ...old[rowIndex],
            //         [columnId]: value,
            //       }
            //     }
            //     return row
            //   })
            // )
            tData[rowIndex][columnId]=value
            finalData.push(tData[rowIndex])
          }


      
        return <div>
          <textarea value={value} className='form-control' style={{width:'10vw'}} onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' />
          {/* xyz */}
        </div>
      }

      // useEffect(()=>{
      //   console.log(finalData)
      // },[finalData])

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
            // setdata(old =>
            //   old.map((row, index) => {
            //     if (index === rowIndex) {
            //       return {
            //         ...old[rowIndex],
            //         [columnId]: value,
            //       }
            //     }
            //     return row
            //   })
            // )

            tData[rowIndex][columnId]=value
            finalData.push(tData[rowIndex])
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
            // setdata(old =>
            //   old.map((row, index) => {
            //     if (index === rowIndex) {
            //       return {
            //         ...old[rowIndex],
            //         [columnId]: value,
            //       }
            //     }
            //     return row
            //   })
            // )

            tData[rowIndex][columnId]=value
            finalData.push(tData[rowIndex])
          }

      
        return <div>
          <input value={value} type={'date'} className='form-control' style={{width:'10vw'}} onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' />
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

            // setdata(old =>
            //   old.map((row, index) => {
            //     if (index === rowIndex) {
            //       return {
            //         ...old[rowIndex],
            //         [columnId]: value,
            //       }
            //     }
            //     return row
            //   })
            // )
            tData[rowIndex][columnId]=value
            finalData.push(tData[rowIndex])
          }
      
        return <select value={value} onChange={onChange} onBlur={onBlur} className='custom-select' style={{width:'5vw',height:'7vh'}}>
            <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>
            <option value="NA">Na</option>
               </select>
      }




    const[columns,setcolumns]=useState([])
    const[allColumn,setallColumn]=useState([])
    const[data,setdata]=useState([])
    const[account,setaccount]=useState([])
    const dispatch = useDispatch()



    useEffect(()=>{     
  
            setcolumns([...col.map((cRes)=>{
                if(cRes.cellType==='textArea'){
                    return {
                        Header : cRes.fieldName,
                        accessor : cRes.accessor,
                        Cell:EditableCell
                    }
                }else if(cRes.cellType==='number'){
                    return {
                        Header : cRes.fieldName,
                        accessor : cRes.accessor,
                        Cell:EditableNumCell
                    }
                }else if(cRes.cellType==='date'){
                    return {
                        Header : cRes.fieldName,
                        accessor : cRes.accessor,
                        Cell:EditableDateCell
                    }
                }else if(cRes.cellType==='dropDown'){
                    return {
                        Header : cRes.fieldName,
                        accessor : cRes.accessor,
                        Cell:EditableDdCell
                    }
                }
                else{
                    return {
                        Header : cRes.fieldName,
                        accessor : cRes.accessor,
                    }
                }
            }
            )])

            setdata([...tData])
    },[])





const tableData = useMemo(() => data, [data])

    const defaultColumn = React.useMemo(
        () => ({
          Filter: ColumnFilter
        }),
        []
      )
  
      const{
          getTableProps,
          getTableBodyProps,
          headerGroups,
          page,
          nextPage,
          previousPage,
          canPreviousPage,
          canNextPage,
          pageOptions,
          gotoPage,
          pageCount,
          setPageSize,
          prepareRow,
          state,
          preGlobalFilteredRows,
          setGlobalFilter,
          selectedFlatRows
      } = useTable({
          columns,
          data,
          defaultColumn
      },
      useBlockLayout,
      useSticky,
      useFilters,
      useGlobalFilter,
      useSortBy,
      usePagination,
      useRowSelect)

      const { globalFilter } = state
      const { pageIndex, pageSize } = state

      const handleSubmit = () =>{
        axios.put(`https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/SubmitEditableData/`,finalData)
        .then((res)=>{alert('Response submitted')})
        .catch((err)=>{
          // console.log(err)
        }
          )

          setdata([...data.map(obj => finalData.find(o => o.id === obj.id) || obj)])

          setfinalData([])

    }


  return (
    <>
    <div>
        <button className='btn btn-success mx-3' onClick={handleSubmit}>Submit</button>
    </div>
    <div {...getTableProps()} className="table sticky table-hover table-striped mx-3 my-3" style={{ width: `${columns.length*7.5}vw`, maxWidth:'95vw',height: 500 }}>
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div {...column.getHeaderProps(column.getSortByToggleProps())} className="th">
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="header1">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div {...column.getHeaderProps(column.getSortByToggleProps())} className="th">
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()} className="body">
          {page.map((row) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => (
                  <div {...cell.getCellProps()} className="td">
                    {cell.render('Cell')}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    <div className='container-pagination'>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type='number'
            defaultValue={pageIndex + 1}
            onChange={e => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(pageNumber)
            }}
            style={{ width: '50px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}>
          {[10,50, 100, 200].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export default Hometable2