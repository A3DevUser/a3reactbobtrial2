const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const getDownloadFile = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'downloadFileReq' : return{
            ...state, loading:true
        }

        case 'downloadFileRes' : return{
            loading:false, val:action.payload, error:''
        }

        case 'downloadFileErr' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

