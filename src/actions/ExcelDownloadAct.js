import axios from "axios";

export const getExcelDataReq = (getExData)=>{
    return{
        type:'getExcelDataReq',
        payload : getExData
    }
}

export const getExcelDataSuccess = (getExData)=>{
    return{
        type:'getExcelDataSuccess',
        payload : getExData
    }
}

export const getExcelDataError = (getExData)=>{
    return{
        type:'getExcelDataError',
        payload : getExData
    }
}

export const getExcelSpDataReq = (getExData)=>{
    return{
        type:'getExcelSpDataReq',
        payload : getExData
    }
}

export const getExcelSpDataSuccess = (getExData)=>{
    return{
        type:'getExcelSpDataSuccess',
        payload : getExData
    }
}

export const getExcelSpDataError = (getExData)=>{
    return{
        type:'getExcelSpDataError',
        payload : getExData
    }
}


export const fetchExcelData = (solId)=>{
    return function(dispatch){
        dispatch(getExcelDataReq())
        axios.get(`https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/AllAccDataForExcel?solId=${solId}`)
        .then(function(response){
          console.log('generateExcel => ' + JSON.stringify(response))
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download','Accounts - ' + solId + '.xlsx'); //or any other extension
            document.body.appendChild(link);
            link.click();
            dispatch(getExcelDataSuccess(response.data))
        })
        .catch((err)=>{
            dispatch(getExcelDataError(err))
        })
    }
}

export const fetchExcelSPData = (solId,schemeCode) => {
    return function(dispatch){
        dispatch(getExcelSpDataReq())
        axios.get(`https://aasapp003.bankofbaroda.co.in:8080/pwt-backend-ver2-0.0.1-SNAPSHOT/api/AccDataForExcel?solId=${solId}&schemeCode=${schemeCode}`)
           .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download','Accounts - ' + solId + schemeCode + '.xlsx'); //or any other extension
            document.body.appendChild(link);
            link.click();
            dispatch(getExcelSpDataSuccess(response.data))
        }).catch((err)=>{
            dispatch(getExcelSpDataError(err))
        })
    }
}