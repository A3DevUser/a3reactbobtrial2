import axios from "axios"

export const getSmartenApiReq = (getAccData)=>{
    return{
        type:'getSmartenApiReq',
        payload : getAccData
    }
}

export const getSmartenApiSuccess = (getAccData)=>{
    return{
        type:'getSmartenApiSuccess',
        payload : getAccData
    }
}

export const getSmartenApiError = (getAccData)=>{
    return{
        type:'getSmartenApiError',
        payload : getAccData
    }
}

export const openSmarten = ()=>{
    return function(dispatch){
    var tknid;
        dispatch(getSmartenApiReq())
        axios.get("https://cors-anywhere.herokuapp.com/http://claptek.centralindia.cloudapp.azure.com:8080/smartenhttps://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOThttps://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/getToken?username=admin&password=admin&objectid=d17eba7d7d65.dsb",).then((res)=>{tknid=res.data
        console.log(tknid)
        window.open(`http://claptek.centralindia.cloudapp.azure.com:8080/smartenhttps://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOThttps://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/getObject?tokenid=${tknid}`)
        dispatch(getSmartenApiSuccess(res.data))
      }).catch((err)=>{
        dispatch(getSmartenApiError(err))
      })
    }
}

