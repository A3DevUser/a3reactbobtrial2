const initialOpDataState = null;

export const partySheetNumRed = (state = initialOpDataState, action)=>{
    switch(action.type){
        case 'sheetNumber' : return state = action.payload;
        default : return state
    }
}