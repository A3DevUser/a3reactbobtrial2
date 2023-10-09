import React,{useEffect,useState} from 'react'
import'./HomeUserStyle.css'
import axios from 'axios'
import { useSelector } from 'react-redux';

const HomeUserTable = (props) => {
    const[auditId,setAuditId] = useState(props.auditId);
    const[accountCount,setAccountCount] = useState([]);
    const AuditTypeSetRed = useSelector((state)=>state.AuditTypeSetRed)
    const getUserData = useSelector((state)=>state.getUserData)


    useEffect(() => {
            setAuditId(props.auditId)
        })

    // useEffect(() => {
    //     // if(AuditTypeSetRed.auditType==='RBIA')
    //     // {
    //         axios.get(`https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/getSampleUserCount?auditId=${auditId}`)
    //         .then(function(response){
    //         setAccountCount(response.data)
    //     });
        // }else if(AuditTypeSetRed.auditType==='Universal Audit'){
        //     axios.get(`https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/getUniUserCount?auditId=${auditId}`)
        //     .then(function(response){
        //     setAccountCount(response.data)
        //     // console.log(response.data)
        // });
        // }else if(AuditTypeSetRed.auditType==='CAMP Audit'){
        //     axios.get(`https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/getCampUserCount?auditId=${auditId}`)
        //     .then(function(response){
        //     setAccountCount(response.data)
        //     // console.log(response.data)
        // });
        // }
    // },[auditId])
    
    return (

        <>
        <div className='fixTableHead'>
            <table className="table table-hover user-table-style">
                <thead>
                    <tr style={{backgroundColor:'#adb5bd'}}>
                        <th scope="col" style={{backgroundColor:'#adb5bd'}}>User Name</th>
                        <th scope="col" style={{backgroundColor:'#adb5bd'}}>Total</th>
                        {/* <th scope="col" style={{backgroundColor:'#adb5bd'}}>Mandatory</th> */}
                        {/* <th scope="col" style={{backgroundColor:'#adb5bd'}}>Others</th> */}
                    </tr>
                </thead>
                <tbody>
                    {getUserData.loading ? <span>Fetch Account...</span> : getUserData.val.map((accCount) => (
                    <tr style={{backgroundColor:'white'}}>
                        <td scope="row" style={{backgroundColor:'white'}}>{accCount.userName}</td>
                        <td style={{backgroundColor:'white'}}>{accCount.total}</td>
                        {/* <td style={{backgroundColor:'white'}}>{accCount.mandatoryCount}</td> */}
                        {/* <td style={{backgroundColor:'white'}}>{accCount.nonMandatoryCount}</td> */}
                    </tr>
                    )) }
                </tbody>
            </table>
        </div>
        </>
    )
}

export default HomeUserTable
