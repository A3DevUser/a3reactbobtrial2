const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const getTableAccountData = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'getTableAccDataReq' : return{
            ...state, loading:true
        }

        case 'getTableAccDataSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getTableAccDataError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

