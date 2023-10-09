import axios from "axios"

export const getDDReq = (getAccData)=>{
    return{
        type:'getDDReq',
        payload : getAccData
    }
}

export const getDDSuccess = (getAccData)=>{
    return{
        type:'getDDSuccess',
        payload : getAccData
    }
}

export const getDDError = (getAccData)=>{
    return{
        type:'getDDError',
        payload : getAccData
    }
}

export const fetchDDData = (formId)=>{
    return function(dispatch){
        dispatch(getDDReq())
        axios.get(`https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/ListDropdown?formId=${formId}`)
        .then((res)=>{
            const accDt = res.data.map((acc=>acc))
            dispatch(getDDSuccess(accDt))
            // console.log(res.data)
        })
        .catch((err)=>{
            dispatch(getDDError(err))
        })
    }
}

