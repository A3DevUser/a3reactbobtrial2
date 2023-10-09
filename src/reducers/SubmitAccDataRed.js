const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const SubmitAccDataRed = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'submitAccDataReq' : return{
            ...state, loading:true
        }

        case 'submitAccDataSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'submitAccDataError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

