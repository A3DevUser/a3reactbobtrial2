const initialOpDataState = null;

export const AreaSchemeDateSetRed = (state = initialOpDataState, action)=>{
    switch(action.type){
        case 'areaSchemeDateSetter' : return state = action.payload;
        default : return state
    }
}