import axios from "axios"

export const saveUserDataReq = (getAccData)=>{
    return{
        type:'saveUserDataReq',
        payload : getAccData
    }
}

export const saveUserDataSuccess = (getAccData)=>{
    return{
        type:'saveUserDataSuccess',
        payload : getAccData
    }
}

export const saveUserDataError = (getAccData)=>{
    return{
        type:'saveUserDataError',
        payload : getAccData
    }
}

export const saveUserData = (api,accArr,userId,curDate,curDate2,auditId)=>{
    return function(dispatch){
        // alert('started')
        // console.log((api+`userId=${userId}&id=${accArr}&cunDate=${curDate}`))
        dispatch(saveUserDataReq())
        axios.put(api+`userId=${userId}&id=${accArr}&cunDate=${curDate}&cunEndDate=${curDate2}&auditId=${auditId}`)
        .then((res)=>{
            const accDt = res.data.map((acc=>acc))
            dispatch(saveUserDataSuccess(accDt))
            // window.open(`/?AuditId=${auditId}&UserId=${userId}&auditType=${auditType}`,"_self")

        })
        .catch((err)=>{
            dispatch(saveUserDataError(err))
        })
    }
}