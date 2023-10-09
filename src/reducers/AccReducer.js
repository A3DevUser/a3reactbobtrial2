const initialFieldVal = {
    loading : false,
    val : [],
    error:''
}

export const getAccountData = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'getAccDataReq' : return{
            ...state, loading:true
        }

        case 'getAccDataSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getAccDataError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

