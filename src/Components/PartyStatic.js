import React from 'react'

const PartyStatic = ({accountNumber,accountResponseCount}) => {

    var title = ''
    if(accountResponseCount.length > 1){
    accountResponseCount.map((acc) => {
        if(acc.accountId == accountNumber)
        title = 'Pass: ' + acc.Pass + ' Fail: ' + acc.Fail + ' NA: ' + acc.NA + ' SR: ' + acc.SR
    })
}
        return (
            <><td className='tr-first-child' data-bs-toggle="tooltip" title= {title}>Result</td>
            <td className='tr-first-child'>Remarks</td></> 
        )   
}

export default PartyStatic
