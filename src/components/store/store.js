import { createStore, combineReducers} from 'redux';
import { sumarReducer } from '../reducers/sumarReducer';


const reducers = combineReducers({
sumarReducer
})

export const store = createStore(
    reducers,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
    )
// nos muestra nuestros reducers
    console.log(store.getState());