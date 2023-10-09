const initialOpDataState = null;

export const OutputDataMainFileSetRed = (state = initialOpDataState, action)=>{
    switch(action.type){
        case 'OutputMainDataFileSetter' : return state = action.payload;
        default : return state
    }
}