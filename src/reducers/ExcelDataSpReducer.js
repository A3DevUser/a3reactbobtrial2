const initialFieldVal = {
    loading : false,
    val : [],
    error:''
}

export const getExcelSpData = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'getExcelSpDataReq' : return{
            ...state, loading:true
        }

        case 'getExcelSpDataSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getExcelSpDataError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

