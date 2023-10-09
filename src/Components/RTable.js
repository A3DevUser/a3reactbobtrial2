import { daysToWeeks } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { useMemo } from 'react'
import { useTable, useGlobalFilter, useRowSelect, useBlockLayout,useSortBy,useFilters,usePagination } from 'react-table'
import { ColumnFilter } from './ColumnFilter'
import { Checkbox } from './Checkbox'
import { useSticky } from 'react-table-sticky'
import { HOMECOLUMNS } from './HomeColumns'
import { useDispatch } from 'react-redux'
import { selectedFlatRow } from '../actions/SelectedRow'



const RTable = ({col,data,userName}) => {
  const dispatch = useDispatch()

    const columns = useMemo(()=>col,[])
    let userId = userName

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
      hooks => {
        hooks.visibleColumns.push(columns => [
          {
            id: 'selection',
            sticky: 'left',
            maxWidth: 70,
            minWidth: 50,
            width: 60,
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
          Cell: ({ row }) => {
            if ((row.original.status==='Submitted')||(row.original.userId !==userId)) {
              if(((row.original.userId ==='')||(row.original.userId ===null))&&(row.original.status!=='Submitted')){
                return <Checkbox {...row.getToggleRowSelectedProps()} />
              }else{
                return <Checkbox {...row.getToggleRowSelectedProps()} disabled />
              }
              }else{
                return <Checkbox {...row.getToggleRowSelectedProps()} />
              } }
            // Cell: ({ row }) => { 

            //   if ((row.original.userId !== userId) ||(row.original.status==='Submitted')) {
            //     return <Checkbox {...row.getToggleRowSelectedProps()} disabled />
            //   }else{
            //     return <Checkbox {...row.getToggleRowSelectedProps()} />
            //   }
            //   return row.values.userId === null ||row.original.userId === userId||row.original.userId === '' || row.values.status !=='submitted' ? <Checkbox {...row.getToggleRowSelectedProps()} /> : <Checkbox {...row.getToggleRowSelectedProps()} disabled />
            
            // }
            
          },
          ...columns
        ])
      },
      useFilters,
      useGlobalFilter,
      useSortBy,
      usePagination,
      useRowSelect)

      const { globalFilter } = state
      const { pageIndex, pageSize } = state


  return (
    <>
        <div {...getTableProps()} className="table sticky table-hover table-striped mx-3 my-3" style={{ width: '99%', height: '65vh' }}>
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div {...column.getHeaderProps(column.getSortByToggleProps())} className="th">
                  <div onClick={dispatch(selectedFlatRow(selectedFlatRows))}></div>
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

export default RTable