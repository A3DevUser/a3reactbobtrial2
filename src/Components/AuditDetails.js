import React from 'react'


const AuditDetails = ({auditTitle,solId,auditStatus,auditType}) => {
    return (
                <ul>
                  {/* <li><strong>Audit ID: {auditId}</strong></li> */}
                  <li><strong>Audit Title: {auditTitle}</strong></li>
                  <li><strong>Sol ID: {solId}</strong></li>
                  <li><strong>Status: {auditStatus}</strong></li>
                  <li><strong>Audit Type: {auditType}</strong></li>
                </ul>
              
    )
}

export default AuditDetails
