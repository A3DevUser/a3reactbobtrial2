import axios from "axios"

export const getUserDataReq = (getAccData)=>{
    return{
        type:'getUserDataReq',
        payload : getAccData
    }
}

export const getUserDataSuccess = (getAccData)=>{
    return{
        type:'getUserDataSuccess',
        payload : getAccData
    }
}

export const getUserDataError = (getAccData)=>{
    return{
        type:'getUserDataError',
        payload : getAccData
    }
}

export const fetchUserData = (api,schemeCode,solId,cunDate,cunDate2,areaName,auditId)=>{
    return function(dispatch){
        // alert(schemeCode)
        // alert(freq)
        dispatch(getUserDataReq())
        axios.get(api+`schemeCode=${schemeCode.replace('&','%26')}&solId=${solId}&cunDate=${cunDate}&cunEndDate=${cunDate2}&areaName=${areaName}&auditId=${auditId}`)
        .then((res)=>{
            const accDt = res.data.map((acc=>acc))
            dispatch(getUserDataSuccess(accDt))
            // alert(schemeCode)
            // alert(auditId)
            // alert(JSON.stringify(accDt))
        })
        .catch((err)=>{
            dispatch(getUserDataError(err))
        })
    }
}

