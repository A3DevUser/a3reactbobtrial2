import axios from "axios"

export const getColDataReq = (getAccData)=>{
    return{
        type:'getColDataReq',
        payload : getAccData
    }
}

export const getColDataSuccess = (getAccData)=>{
    return{
        type:'getColDataSuccess',
        payload : getAccData
    }
}

export const getColDataError = (getAccData)=>{
    return{
        type:'getColDataError',
        payload : getAccData
    }
}

export const fetchColData = (formId,audType,areaName)=>{
    return function(dispatch){
        dispatch(getColDataReq())
        axios.get(`https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/getByFormIdAndAuditTypeAndArea?formId=${formId}&auditType=${audType}&areaName=${areaName}`)
        .then((res)=>{
            const accDt = res.data.map((acc=>acc))
            dispatch(getColDataSuccess(accDt))
            // alert(JSON.stringify(accDt))
        })
        .catch((err)=>{
            dispatch(getColDataError(err))
        })
    }
}

export const fetchHomeColData = (formId,audType,areaName,portfolio)=>{
    return function(dispatch){
        dispatch(getColDataReq())
        axios.get(`https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/getColumnHeader?formId=${formId}&auditType=${audType}&areaName=${areaName}&portfolio=${portfolio.replace('&','%26')}`)
        .then((res)=>{
            const accDt = res.data.map((acc=>acc))
            dispatch(getColDataSuccess(accDt))
            // alert(JSON.stringify(accDt))
        })
        .catch((err)=>{
            dispatch(getColDataError(err))
        })
    }
}

