const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const getModColumnData = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'getModColDataReq' : return{
            ...state, loading:true
        }

        case 'getModColDataSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getModColDataError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

