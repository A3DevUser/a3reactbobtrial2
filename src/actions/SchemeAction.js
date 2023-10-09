import axios from "axios"

export const getSchemeReq = (getAccData)=>{
    return{
        type:'getSchemeReq',
        payload : getAccData
    }
}

export const getSchemeSuccess = (getAccData)=>{
    return{
        type:'getSchemeSuccess',
        payload : getAccData
    }
}

export const getSchemeError = (getAccData)=>{
    return{
        type:'getSchemeError',
        payload : getAccData
    }
}

export const fetchSchemeData = (solId,area,sns)=>{
    return function(dispatch){
        dispatch(getSchemeReq())
        axios.get(`https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/getSchemeBySolSample?cunAreaName=${area}`)
        .then((res)=>{
            const accDt = res.data.map((acc=>acc))
            dispatch(getSchemeSuccess(accDt))
            // alert(JSON.stringify(accDt))
        })
        .catch((err)=>{
            dispatch(getSchemeError(err))
        })
    }
}

