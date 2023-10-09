const initialFieldVal = {
    loading : false,
    val : [],
    error:''
}

export const SendOutputData = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'sendOutputDataReq' : return{
            ...state, loading:true
        }

        case 'sendOutputDataSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'sendOutputDataError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

