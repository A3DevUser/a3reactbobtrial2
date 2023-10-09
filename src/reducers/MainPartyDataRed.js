const initialOpDataState = null;

export const MainPartyDataRed = (state = initialOpDataState, action)=>{
    switch(action.type){
        case 'MainPartyDataSetter' : return state = [...action.payload];
        default : return state
    }
}