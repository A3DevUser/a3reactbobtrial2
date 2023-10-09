import axios from "axios"

export const getAreaReq = (getAccData)=>{
    return{
        type:'getAreaReq',
        payload : getAccData
    }
}

export const getAreaSuccess = (getAccData)=>{
    return{
        type:'getAreaSuccess',
        payload : getAccData
    }
}

export const getAreaError = (getAccData)=>{
    return{
        type:'getAreaError',
        payload : getAccData
    }
}

export const fetchAreaData = (branchName,sns)=>{
    return function(dispatch){
        dispatch(getAreaReq())
        axios.get(`https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/areaByBranch?branchName=${branchName}`)
        .then((res)=>{
            const accDt = res.data.map((acc=>acc))
            dispatch(getAreaSuccess(accDt))
            // alert(JSON.stringify(accDt))
        })
        .catch((err)=>{
            dispatch(getAreaError(err))
        })
    }
}

