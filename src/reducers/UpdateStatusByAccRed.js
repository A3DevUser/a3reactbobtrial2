const initialFieldVal = {
    loading : false,
    val : [],
    error:''
}

export const sendStatusDataRed = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'sendStatusDataReq' : return{
            ...state, loading:true
        }

        case 'sendStatusDataSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'sendStatusDataError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

