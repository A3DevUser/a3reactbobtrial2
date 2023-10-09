const initialOpDataState = null;

export const AuditTypeSetRed = (state = initialOpDataState, action)=>{
    switch(action.type){
        case 'AuditTypeSetter' : return state = action.payload;
        default : return state
    }
}