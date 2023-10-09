const initialFieldVal = {
    loading : false,
    val : [],
    error:''
}

export const getExcelData = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'getExcelDataReq' : return{
            ...state, loading:true
        }

        case 'getExcelDataSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getExcelDataError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

