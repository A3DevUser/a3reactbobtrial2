import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchColData } from '../actions/ColumnHeader'

const NavbarComp = () => {
    const dispatch = useDispatch()
    const AuditTypeSetRed = useSelector((state)=>state.AuditTypeSetRed)


    const handleHomeNav = ()=>{
        dispatch(fetchColData('Form-101',AuditTypeSetRed.auditType))
          // history.push({
          //   pathname: '/home',
          //   state: {auditUrl: `${AuditTypeSetRed.auditUrl}`,
          //        userId: `${AuditTypeSetRed.userId}`,
          //       auditType : `${AuditTypeSetRed.auditType}`
          //       }
          // });
          window.open(`/?AuditId=${AuditTypeSetRed.auditId}&UserId=${AuditTypeSetRed.userId}&auditType=${AuditTypeSetRed.auditType}`,"_self")
    
       }
  return (
    <header>
      <nav>
      <span className="navbar-brand nav-style" style={{color:'black',fontSize:'25px',cursor:'pointer'}} onClick={handleHomeNav}   >Account Assesment For Audit</span>
      </nav>
    </header>
  )
}

export default NavbarComp
