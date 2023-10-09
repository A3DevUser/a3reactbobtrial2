import axios from "axios"

export const getNewAccReq = (getAccData)=>{
    return{
        type:'getNewAccReq',
        payload : getAccData
    }
}

export const getNewAccSuccess = (getAccData)=>{
    return{
        type:'getNewAccSuccess',
        payload : getAccData
    }
}

export const getNewAccError = (getAccData)=>{
    return{
        type:'getNewAccError',
        payload : getAccData
    }
}

export const fetchNewAccData = (api,schemeCode,solId,currDate,currDate2,areaName,auditId)=>{
    return function(dispatch){
        dispatch(getNewAccReq())
        // console.log(api+`schemeCode=${schemeCode.replace('&','%26')}&solId=${solId}&cunDate=${currDate}&cunEndDate=${currDate2}`)
        axios.get(api+`schemeCode=${schemeCode.replace('&','%26')}&solId=${solId}&cunDate=${currDate}&cunEndDate=${currDate2}&areaName=${areaName}&auditId=${auditId}`)
        // axios.get(`https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/getAccountData?schemeCode=${schemeCode.replace('&','%26')}&solId=${solId}&cunDate=${currDate}`)
        .then((res)=>{
            const accDt = res.data.map((acc=>acc))
            dispatch(getNewAccSuccess(accDt))
            // alert(JSON.stringify(accDt))
        })
        .catch((err)=>{
            dispatch(getNewAccError(err))
        })
    }
}

