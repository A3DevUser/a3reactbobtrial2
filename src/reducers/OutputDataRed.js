const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const getOutputData = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'getOutputDataReq' : return{
            ...state, loading:true
        }

        case 'getOutputDataSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getOutputDataError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

