const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const getUserData = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'getUserDataReq' : return{
            ...state, loading:true
        }

        case 'getUserDataSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getUserDataError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

