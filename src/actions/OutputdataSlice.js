import axios from "axios"

export const getOutputDataSliceReq = (getAccData)=>{
    return{
        type:'getOutputDataSliceReq',
        payload : getAccData
    }
}

export const getOutputDataSliceSuccess = (getAccData)=>{
    return{
        type:'getOutputDataSliceSuccess',
        payload : getAccData
    }
}

export const getOutputDataSliceError = (getAccData)=>{
    return{
        type:'getOutputDataSliceError',
        payload : getAccData
    }
}

export const fetchOutputDataSlice = (outputId,finalAccountData,tests)=>{
    return function(dispatch){
        let outputDt=[];
        dispatch(getOutputDataSliceReq())
        async function outputDtSlice(){
        await axios.get(`/apihttps://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOThttps://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/getOutputByIds?outputId=${outputId.slice(0,2000)}`)
        .then(function(response){
            outputDt=[...response.data]
        })
        await axios.get(`/apihttps://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOThttps://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/getOutputByIds?outputId=${outputId.slice(2000,(finalAccountData.length * tests.length))}`)
        .then(function(response){
            dispatch(getOutputDataSliceSuccess (...outputDt,...response.data))
            console.log()
        })
        .catch((err)=>{
            dispatch(getOutputDataSliceError(err))
        })
    }
    }
}

