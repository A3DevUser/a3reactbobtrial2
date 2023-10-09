const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const getModData = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'getModDataReq' : return{
            ...state, loading:true
        }

        case 'getModDataSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getModDataError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

