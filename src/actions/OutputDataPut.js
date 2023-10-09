import axios from "axios"
import { useSelector } from "react-redux"
import { fetchApiData } from "./ApiRepoAction"
import { fetchOutputId } from "./outputIdCount"
import { submitOutputData } from "./SubmitOutputData"

export const sendOutputDataReq = (getAccData)=>{
    return{
        type:'sendOutputDataReq',
        payload : getAccData
    }
}

export const sendOutputDataSuccess = (getAccData)=>{
    return{
        type:'sendOutputDataSuccess',
        payload : getAccData
    }
}

export const sendOutputDataError = (getAccData)=>{
    return{
        type:'sendOutputDataError',
        payload : getAccData
    }
}

export const PutOutputData = (initialData,isSubmit,acc,schemeCode,auditId,area,solId,currDate,currDate2,nSchemeCode,apiOpLen,outputId)=>{
    return function(dispatch){
        dispatch(sendOutputDataReq())
        axios({
            method: "PUT",
            url: `https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/ListOutputData/`,
            data: initialData
        }).then(function(response){
            alert("Response Saved");
            dispatch(fetchOutputId(outputId,isSubmit,auditId,area,solId,currDate,currDate2,nSchemeCode,apiOpLen,outputId,acc,schemeCode))
//             if(isSubmit){
//                 if(apiOpLen !== outputId.length){
//                     alert('Please fill all the remarks')
//                 }else{
//                     dispatch(submitOutputData(acc,schemeCode))
//        // dispatch(submitAccData(acc,AreaSchemeDateSetRed.currDate))
//                     dispatch(fetchApiData('submit',area,'Form-102','',solId,currDate,acc,'','',currDate2,nSchemeCode,auditId))
//                 }
//  }
            // console.log(JSON.stringify(response.data))
        })
        .catch((err)=>{
            dispatch(sendOutputDataError(err))
        })
    }
}



export const saveAccDataReq = (getAccData)=>{
    return{
        type:'saveAccDataReq',
        payload : getAccData
    }
}

export const saveAccDataSuccess = (getAccData)=>{
    return{
        type:'saveAccDataSuccess',
        payload : getAccData
    }
}

export const saveAccDataError = (getAccData)=>{
    return{
        type:'sendOutputDataError',
        payload : getAccData
    }
}

export const saveAccData = (accArr,schemeCode)=>{
    return function(dispatch){
        dispatch(saveAccDataReq())
        axios.put(`https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api?id=${accArr}&schemeCode=${schemeCode}`)
        .then((res)=>{
            dispatch(saveAccDataSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(saveAccDataError(err))
        })
    }
}


