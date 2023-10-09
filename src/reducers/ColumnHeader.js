const initialFieldVal = {
    loading : 'static',
    val : [],
    error:''
}

export const getColumnData = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'getColDataReq' : return{
            ...state, loading:true
        }

        case 'getColDataSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getColDataError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

