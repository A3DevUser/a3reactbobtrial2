const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const getSchemeData = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'getSchemeReq' : return{
            ...state, loading:true
        }

        case 'getSchemeSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getSchemeError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

