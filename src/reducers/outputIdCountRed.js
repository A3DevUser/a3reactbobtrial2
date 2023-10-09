const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const getOutputId = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'getOutputIdReq' : return{
            ...state, loading:true
        }

        case 'getOutputIdSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getOutputIdError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

