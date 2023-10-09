import axios from "axios"
import { batch } from "react-redux"

export const submitOutputDataReq = (getAccData)=>{
    return{
        type:'submitOutputDataReq',
        payload : getAccData
    }
}

export const submitOutputDataSuccess = (getAccData)=>{
    return{
        type:'submitOutputDataSuccess',
        payload : getAccData
    }
}

export const submitOutputDataError = (getAccData)=>{
    return{
        type:'submitOutputDataError',
        payload : getAccData
    }
}

export const submitAccDataReq = (getAccData)=>{
    return{
        type:'submitAccDataReq',
        payload : getAccData
    }
}

export const submitAccDataSuccess = (getAccData)=>{
    return{
        type:'submitAccDataSuccess',
        payload : getAccData
    }
}

export const submitAccDataError = (getAccData)=>{
    return{
        type:'submitAccDataError',
        payload : getAccData
    }
}


export const submitOutputData = (accArr,portfolio)=>{
    return function(dispatch){
        dispatch(submitOutputDataReq())
        axios.put(`https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/SetSubmitStatus?accountId=${accArr}&portfolio=${portfolio.replace('&','%26')}`)
        .then((res)=>{
            const accDt = res.data.map((acc=>acc))
                dispatch(submitOutputDataSuccess(accDt))
            })
        .catch((err)=>{
            dispatch(submitOutputDataError(err))
        })
    }
}


export const submitAccData = (api,accArr,curDate,cunDate2,auditId,userId,auditType,schemeCode,solId)=>{
    return function(dispatch){
        // alert('started')
        dispatch(submitAccDataReq())
        axios.put(api+`id=${accArr}&cunDate=${curDate}&cunEndDate=${cunDate2}&schemeCode=${schemeCode.replace('&','%26')}&solId=${solId}&auditId=${auditId}`)
        .then((res)=>{
            // alert('Response Submitted')
            let text = 'Response Submitted'
            if(window.confirm(text)){
                window.open(`/?AuditId=${auditId}&UserId=${userId}&auditType=${auditType}`,"_self")
            }else{
                window.open(`/?AuditId=${auditId}&UserId=${userId}&auditType=${auditType}`,"_self")
            }

            const accDt = res.data.map((acc=>acc))
            dispatch(submitAccDataSuccess(accDt))
            // window.open(`/?AuditId=${auditId}&UserId=${userId}&auditType=${auditType}`,"_self")
            
        })
        .catch((err)=>{
            dispatch(submitAccDataError(err))
        })
    }
}

function navigateToHome(){

}
