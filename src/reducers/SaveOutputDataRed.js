const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const saveAccDataRed = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'saveAccDataReq' : return{
            ...state, loading:true
        }

        case 'saveAccDataSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'saveAccDataError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

