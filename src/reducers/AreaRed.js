const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const getAreaData = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'getAreaReq' : return{
            ...state, loading:true
        }

        case 'getAreaSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getAreaError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

