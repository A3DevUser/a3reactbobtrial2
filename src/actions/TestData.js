import axios from "axios"

export const getTestDataReq = (getAccData)=>{
    return{
        type:'getTestDataReq',
        payload : getAccData
    }
}

export const getTestDataSuccess = (getAccData)=>{
    return{
        type:'getTestDataSuccess',
        payload : getAccData
    }
}

export const getTestDataError = (getAccData)=>{
    return{
        type:'getTestDataError',
        payload : getAccData
    }
}

export const fetchTestData = (schemeCode,areaName,freq)=>{
    return function(dispatch){
        // alert(schemeCode)
        // alert(freq)
        dispatch(getTestDataReq())
        axios.get(`https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/SampleTestByPortfolio?schemeCode=${schemeCode.replace('&','%26')}&areaName=${areaName}`)
        .then((res)=>{
            const accDt = res.data.map((acc=>acc))
            dispatch(getTestDataSuccess(accDt))
            // alert(schemeCode)
            // alert(auditId)
            // alert(JSON.stringify(accDt))
        })
        .catch((err)=>{
            dispatch(getTestDataError(err))
        })
    }
}

