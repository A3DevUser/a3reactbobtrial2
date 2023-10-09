const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const SubmitOutputDataRed = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'submitOutputDataReq' : return{
            ...state, loading:true
        }

        case 'submitOutputDataSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'submitOutputDataError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

