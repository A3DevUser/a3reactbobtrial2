const initialFieldVal = {
    loading : true,
    val : [],
    error:''
}

export const getUploadFilePostRed = (state=initialFieldVal,action) => {

    switch(action.type){
        case 'uploadFileReq' : return{
            ...state, loading:true
        }

        case 'uploadFileSuccess' : return{
            loading:false, val:action.payload, error:''
        }

        case 'uploadFileError' : return{
            loading:true, val:[], error:action.payload
        }

        default :return state
    }

}

