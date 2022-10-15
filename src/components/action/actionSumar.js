import {types} from '../types/types';

// podriamos que las acciones son las que dicen lo 
// que se va hacer
// el tipo es la evaluacion
// el payload es la accion
export const aumentar = (sumarTen) => {
  return {
    type: types.sumarCount,
    payload: sumarTen
  }
}

// el payload sera la accion a ejecutar
export const disminuar = () => {
    return {
      type: types.restarCount,
      payload: 10
    }
}