const initialSelRow = []

export const selectedRowState = (state=initialSelRow, action)=>{
    switch(action.type){
        case 'selectedFlatRow' : return state = action.payload;
        default : return state
    }
}