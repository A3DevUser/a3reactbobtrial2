const initialFieldVal = {
    loading : false,
    val : [],
    error:''
}

export const getTestData = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'getSmartenApiReq' : return{
            ...state, loading:true
        }

        case 'getSmartenApiSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getSmartenApiError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

