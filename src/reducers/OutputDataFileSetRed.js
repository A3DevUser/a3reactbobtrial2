const initialOpDataState = null;

export const OutputDataFileSetRed = (state = initialOpDataState, action)=>{
    switch(action.type){
        case 'OutputDataFileSetter' : return state = action.payload;
        default : return state
    }
}