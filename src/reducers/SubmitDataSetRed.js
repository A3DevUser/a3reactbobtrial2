const initialOpDataState = null;

export const SubmitDataSetRed = (state = initialOpDataState, action)=>{
    switch(action.type){
        case 'SubmitDataSetter' : return state = action.payload;
        default : return state
    }
}