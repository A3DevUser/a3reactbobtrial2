const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const getAccountDataId = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'getAccDataIdReq' : return{
            ...state, loading:true
        }

        case 'getAccDataIdSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getAccDataIdError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

