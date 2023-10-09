import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CompTable from './CompTable'
import NavbarComp from './NavbarComp'
import NavbarParty from './NavbarParty'
import SpinnerLoader from './SpinnerLoader'

const CompComponent = () => {
    const getColumnData =  useSelector((state)=>state.getColumnData)
    const getTestData = useSelector((state)=>state.getTestData)
    const mySelRowState = useSelector((state)=>state.selectedRowState)

    useEffect(()=>{
      console.log(
        mySelRowState.map((row) => {
            return getTestData.val.map((tes) => {
              return { ...tes, 'accountId': row.original.id, 'customerName': row.original.customerName };
            });
          }).flat()
        // getTestData.val.map((tes)=>{
        //             return {...tes}
        //         })
        )
    // console.log(mySelRowState.map((row)=>{
    //     return {'accountId': row.original.id,'customerName' : row.original.customerName}
    // }))

    },[getTestData])


  return (
    <div>
        <NavbarComp/>
        {
          getColumnData.loading ? <SpinnerLoader/> : getTestData.loading ? <SpinnerLoader/> :
            <CompTable colData={getColumnData.val} tableD={mySelRowState.map((row) => {
                return getTestData.val.map((tes) => {
                  return { ...tes, 'accountId': row.original.id, 'customerName': row.original.customerName };
                });
              }).flat()}/>
        }
    </div>
  )
}

export default CompComponent
