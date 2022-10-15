import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { disminuar } from './action/actionSumar';

export const Hijo = () => {

  const dispath = useDispatch()
  const { restar } = useSelector( state => state.sumarReducer)
  // console.log(state)
  const handleRestar = () => {
    dispath(disminuar(10))
  }

  return (
    <div className='hijo'>
        <h1>Hijo</h1>
       <button onClick={handleRestar} >
            Restar
       </button>
       <h2>{restar}</h2>
    </div>
  )
}
