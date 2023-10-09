const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const saveUserIdRed = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'saveUserDataReq' : return{
            ...state, loading:true
        }

        case 'saveUserDataSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'saveUserDataError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

