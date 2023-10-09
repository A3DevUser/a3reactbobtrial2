import axios from "axios"

export const getPartyHeaderReq = (getAccData)=>{
    return{
        type:'getPartyHeaderReq',
        payload : getAccData
    }
}

export const getPartyHeaderSuccess = (getAccData)=>{
    return{
        type:'getPartyHeaderSuccess',
        payload : getAccData
    }
}

export const getPartyHeaderError = (getAccData)=>{
    return{
        type:'getPartyHeaderError',
        payload : getAccData
    }
}

export const fetchPartyHeaderData = (formId,auditType)=>{
    return function(dispatch){
        dispatch(getPartyHeaderReq())
        axios.get(`https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/ParentHeader?formId=${formId}&auditType=${auditType}`)
        .then((res)=>{
            const accDt = res.data.map((acc=>acc))
            dispatch(getPartyHeaderSuccess(accDt))
            // console.log(res.data)
        })
        .catch((err)=>{
            dispatch(getPartyHeaderError(err))
        })
    }
}

