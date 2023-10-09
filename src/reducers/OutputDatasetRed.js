const initialOpDataState = null;

export const OutputDataSetRed = (state = initialOpDataState, action)=>{
    switch(action.type){
        case 'OutputDataSetter' : return state = action.payload;
        default : return state
    }
}