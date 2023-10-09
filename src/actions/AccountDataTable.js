import axios from "axios"

export const getTableAccDataReq = (getAccData)=>{
    return{
        type:'getTableAccDataReq',
        payload : getAccData
    }
}

export const getTableAccDataSuccess = (getAccData)=>{
    return{
        type:'getTableAccDataSuccess',
        payload : getAccData
    }
}

export const getTableAccDataError = (getAccData)=>{
    return{
        type:'getTableAccDataError',
        payload : getAccData
    }
}

export const fetchTableAccData= (api,accounts,schemeCode,solId,currDate,currDate2,areaName,auditId)=>{
    return function(dispatch){
        dispatch(getTableAccDataReq())
            axios.get(api+`accountId=${accounts}&schemeCode=${schemeCode.replace('&','%26')}&solId=${solId}&cunDate=${currDate}&cunEndDate=${currDate2}&areaName=${areaName}&auditId=${auditId}`)
            .then((res)=>{
                const accDt = res.data.map((acc=>acc))
                dispatch(getTableAccDataSuccess(accDt))
            })
            .catch((err)=>{
                dispatch(getTableAccDataError(err))
            })
    }
}

