import React, { useEffect, useState } from 'react'
import RTable from './RTable'
import { SelectColumnFilter } from './SelectColumnFilter'
import { NumberRangeColumnFilter } from './NumberRangeColumnFilter'
import { ColumnFilter } from './ColumnFilter'
import Hometable2 from './Hometable2'
import { useSelector } from 'react-redux'
import SpinnerLoader from './SpinnerLoader' 
import Preloader from './Preloader'

const HomeTables = ({getColumnData,myAccState,tableSwitch,data,userId}) => {
  const getNewAccData = useSelector((state)=>state.getNewAccData)

  const selectedRowState = useSelector((state)=>state.selectedRowState)

  // useEffect(()=>{
  //   console.log(selectedRowState)
  // },[selectedRowState])


  return (
    <div>
      {
          getColumnData.loading === 'static' ? 
          <Preloader/> : 
          getColumnData.loading === true ?
          <SpinnerLoader/>
          : getNewAccData.loading ?  <div>Loading..</div> : getColumnData.loading ? <p>Loading...</p> : 
          <>
          {
            tableSwitch===0 ? 
            <RTable col={getColumnData.val.sort((a,b)=>{return a.orderBy-b.orderBy}).map((res)=>{return{'Header': res.fieldName,'accessor': res.accessor,'sticky':res.sticky,'Filter': res.columnFilter==='select' ? SelectColumnFilter 
            : 
            res.columnFilter==='numRange' ? NumberRangeColumnFilter : ColumnFilter, 'filter' 
            : res.columnFilter==='numRange' ? 'between' : null}})} data={data} userName={userId}/> 
            :
            getNewAccData.loading ?  <div>Loading..</div> : getColumnData.loading ? <p>Loading...</p> :
            <div>
              <Hometable2 col={getColumnData.val} tData={data} userName={userId} />
            </div>
          }
          </>
        }
    </div>
  )
}

export default HomeTables
