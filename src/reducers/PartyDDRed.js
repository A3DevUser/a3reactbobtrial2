const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const getDDData = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'getDDReq' : return{
            ...state, loading:true
        }

        case 'getDDSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getDDError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

