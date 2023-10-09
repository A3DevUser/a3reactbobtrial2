import axios from "axios"
import { fetchNewAccData } from "./NewAccountAct"
import { fetchUserData } from "./UserCountAct"
import { fetchTableAccData } from "./AccountDataTable" 
import { submitAccData } from "./SubmitOutputData"
import { saveUserData } from "./SaveUserId"


export const getApiDataReq = (getAccData)=>{
    return{
        type:'getApiDataReq',
        payload : getAccData
    }
}

export const getApiDataSuccess = (getAccData)=>{
    return{
        type:'getApiDataSuccess',
        payload : getAccData
    }
}

export const getApiDataError = (getAccData)=>{
    return{
        type:'getApiDataError',
        payload : getAccData
    }
}

export const fetchApiData = (fetchSub,apiId,formId,schemeCode,solId,curDate,accArr,auditType,userId,cunDate2,portfolio,auditId)=>{
    return function(dispatch){
        // console.log(fetchSub)
        // console.log(apiId)
        // console.log(formId)
        // console.log(schemeCode)
        // console.log(solId)
        // console.log(curDate)
        // console.log(accArr)
        // console.log(auditType)
        // console.log(userId)
        // console.log(cunDate2)
        // console.log(portfolio)

        dispatch(getApiDataReq())
        axios.get(`https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/getByApiId?apiId=${apiId}&formId=${formId}&portfolio=${portfolio.replace('&','%26')}`)
        .then((res)=>{
            if(fetchSub==='fetch'){
                if(formId==='Form-101'){
                    res.data.map((aRes)=>{
                        if(aRes.apiType==='fetchAcc'){
                            dispatch(fetchNewAccData(aRes.api,schemeCode,solId,curDate,cunDate2,apiId,auditId))
                        }else if(aRes.apiType ==='userCount'){
                            dispatch(fetchUserData(aRes.api,schemeCode,solId,curDate,cunDate2,apiId,auditId))
                        }
                    })
                }else if(formId='Form-102'){
                    res.data.map((aRes)=>{
                        if(aRes.apiType==='accountByID'){
                            dispatch(fetchTableAccData(aRes.api,accArr,portfolio,solId,curDate,cunDate2,apiId,auditId))
                        }
                    })
                }
            }else if(fetchSub==='submit'){
                if(formId='Form-102'){
                    res.data.map((aRes)=>{
                        if(aRes.apiType==='submitStatus'){
                            console.log(accArr)
                            dispatch(submitAccData(aRes.api,accArr,curDate,cunDate2,auditId,userId,auditType,portfolio,solId))
                        }
                    })
                }
            }else if(fetchSub==='save'){
                if(formId='Form-102'){
                    res.data.map((aRes)=>{
                        if(aRes.apiType==='setUser'){
                            dispatch(saveUserData(aRes.api,accArr,userId,curDate,cunDate2,auditId))
                        }
    
                    })
                }
            }
        })
        .catch((err)=>{
            console.log(err)
        })

    }
}

