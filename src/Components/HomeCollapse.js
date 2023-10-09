import React from 'react'
import { useSelector } from 'react-redux'
import AuditDetails from './AuditDetails'
import HomeFilters from './HomeFilters'
import HomeUserTable from './HomeUserTable'

const HomeCollapse = ({area,auditTitle,solId,auditStatus,setSchemeCode,auditId,auditType,handleFetchAccounts,startDate}) => {
  return (
    <div>
      <div className="row" style={{width:'99.3vw'}}>
          <div className="col">
            <div className="collapse show multi-collapse" id="multiCollapseExample1">
              <div className="card card-body">
                <AuditDetails auditTitle = {auditTitle} solId ={solId} auditStatus = {auditStatus} auditType = {auditType}/>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="collapse show multi-collapse" id="multiCollapseExample2">
              <div className="card card-body ">
              {solId && startDate&&<HomeFilters setSchemeCode = {setSchemeCode} solId = {solId} area={area} startDate={startDate}/>}
                <button type="button" className='btn btn-success fetch-button my-3 container' onClick = {handleFetchAccounts}>Fetch Accounts</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="collapse show multi-collapse" id="multiCollapseExample3">
              <div className="card card-body">
                <HomeUserTable auditId = {auditId}/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeCollapse
