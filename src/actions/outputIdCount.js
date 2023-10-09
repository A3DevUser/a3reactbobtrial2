import axios from "axios"
import { fetchApiData } from "./ApiRepoAction"
import { submitOutputData } from "./SubmitOutputData"

export const getOutputIdReq = (getAccData)=>{
    return{
        type:'getOutputIdReq',
        payload : getAccData
    }
}

export const getOutputIdSuccess = (getAccData)=>{
    return{
        type:'getOutputIdSuccess',
        payload : getAccData
    }
}

export const getOutputIdError = (getAccData)=>{
    return{
        type:'getOutputIdError',
        payload : getAccData
    }
}

export const fetchOutputId = (opId,isSubmit,auditId,area,solId,currDate,currDate2,nSchemeCode,apiOpLen,outputId,acc,schemeCode)=>{
    return function(dispatch){
        dispatch(getOutputIdReq())
        axios.get(`https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/getOutputCount?outputId=${opId}`)
        .then((res)=>{
            const accDt = res.data.map((acc=>acc))
            dispatch(getOutputIdSuccess(accDt))
            if(isSubmit){
                if(res.data[0] !== outputId.length){
                    alert('Please fill all the results')
                }else{
                    dispatch(submitOutputData(acc,schemeCode))
       // dispatch(submitAccData(acc,AreaSchemeDateSetRed.currDate))
                    dispatch(fetchApiData('submit',area,'Form-102','',solId,currDate,acc,'','',currDate2,nSchemeCode,auditId))
                }
 }
        })
        .catch((err)=>{
            dispatch(getOutputIdError(err))
        })
    }
}

