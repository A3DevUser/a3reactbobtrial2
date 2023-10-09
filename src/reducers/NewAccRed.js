const initialFieldVal = {
    loading : false,
    val : [],
    error:''
}

export const getNewAccData = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'getNewAccReq' : return{
            ...state, loading:true
        }

        case 'getNewAccSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getNewAccError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

