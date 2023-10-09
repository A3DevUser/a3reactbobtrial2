import React, { useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchColData } from '../actions/ColumnHeader';
import axios from 'axios';
import { AuditTypeSetter } from '../actions/OutputDataSetter';
import fs from 'fs'


const LandingPage = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const auditUrl = "https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/getAuditData?id="+ queryParams.get('AuditId');
    const userId = queryParams.get('UserId');
    const auditType = queryParams.get('auditType');
    const history = useHistory();
    const dispatch = useDispatch()
    const getColumnData =  useSelector((state)=>state.getColumnData)


    const date = new Date()

    useEffect(()=>{
        dispatch(AuditTypeSetter({auditType:auditType,userId:userId,auditUrl:auditUrl}))
      // dispatch(fetchColData('Form-101',auditType))
      history.push({
        pathname: '/home',
        state: {auditUrl: `${auditUrl}`,
             userId: `${userId}`,
            auditType : `${auditType}`
            }
      });

    },[])

    



  return <div>Loading...</div>;
};

export default LandingPage;
