const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const getTestData = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'getTestDataReq' : return{
            ...state, loading:true
        }

        case 'getTestDataSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getTestDataError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

