const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const getPartyHeaderData = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'getPartyHeaderReq' : return{
            ...state, loading:true
        }

        case 'getPartyHeaderSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'getPartyHeaderError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

