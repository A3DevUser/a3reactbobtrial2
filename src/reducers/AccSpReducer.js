const initialFieldVal = {
    loading : false,
    val : [],
    error:''
}

export const getAccountSpData = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'getAccSPDataReq' : return{
            ...state, loading:true
        }

        case 'getAccSPDataSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getAccSPDataError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

