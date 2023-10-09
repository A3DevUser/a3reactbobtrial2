import React from 'react'

const PartyHeader = (props) => {
    const tooltipTitle = '\nSanction Date ' + props.sanctionDate + 
                        '\n Office = ' + props.office+ 
                        '\n Customer ID = ' + props.customerId
    return (
            <th colSpan = '2' className='th-col-sticky'>
                {/* <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="tooltip" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <strong>Account Number = {props.accountNumber}<br/>
                            Sanction Date = {props.sanctionDate}</strong>
                        </button>
                        </h2>
                    </div>
                 </div> */}
                 <span className="d-inline-block"  data-bs-toggle="tooltip" title={tooltipTitle}>
                 <strong>Account Number = {props.accountNumber}<br/>
                         Customer Name = {props.customerName}</strong>
                 </span>
            </th>  
    )
}

export default PartyHeader
