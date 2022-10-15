import { types } from "../types/types";


const inicialStatedo = {
    sumar: 0,
    restar: 1,
    estado:false
}

export const sumarReducer = (state=inicialStatedo, action) => {
    switch (action.type) {
        case types.sumarCount:
            return{
                ...state,
                sumar:state.sumar + action.payload
            }

        case types.restarCount:
                return {
                    ...state,
                    restar: state.restar - action.payload
                }
            
    
        default:
            return state;
    }
}