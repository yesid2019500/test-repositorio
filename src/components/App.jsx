import React, {  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { aumentar } from './action/actionSumar';
import { Hijo } from './Hijo';

export const App = () => {
  
  const state = useSelector( state=> state.sumarReducer)
  console.log(state)
  // console.log(sumar)
  
  const distapth = useDispatch()
  const handleSumar = () => {
   
    distapth(aumentar(10))
   
  }
  return (
    <div className='container'>
      <h1>App padre</h1>
       <button onClick={handleSumar} >Ingrementar</button>
       {/* <h1>{sumar}</h1> */}
       <Hijo/>
    </div>
  )
}
