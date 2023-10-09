const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const getApiData = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'getApiDataReq' : return{
            ...state, loading:true
        }

        case 'getApiDataSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getApiDataError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

