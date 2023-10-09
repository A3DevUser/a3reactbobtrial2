const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const getOutputDataSlice = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'getOutputDataSliceReq' : return{
            ...state, loading:true
        }

        case 'getOutputDataSliceSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getOutputDataSliceError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

