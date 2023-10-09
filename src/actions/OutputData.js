import axios from "axios"

export const getOutputDataReq = (getAccData)=>{
    return{
        type:'getOutputDataReq',
        payload : getAccData
    }
}

export const getOutputDataSuccess = (getAccData)=>{
    return{
        type:'getOutputDataSuccess',
        payload : getAccData
    }
}

export const getOutputDataError = (getAccData)=>{
    return{
        type:'getOutputDataError',
        payload : getAccData
    }
}

export const fetchOutputData = (opId)=>{
    return function(dispatch){
        dispatch(getOutputDataReq())
        axios.get(`https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/getOutputByIds?outputId=${opId}`)
        .then((res)=>{
            const accDt = res.data.map((acc=>acc))
            dispatch(getOutputDataSuccess(accDt))
        })
        .catch((err)=>{
            dispatch(getOutputDataError(err))
        })
    }
}

