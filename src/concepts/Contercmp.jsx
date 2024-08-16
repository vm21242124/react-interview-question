import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, resetcounter } from './Redux';

function Contercmp() {
    const dispatch=useDispatch();
    const counter =useSelector(state=>state.counter)
  return (
    <div>
        <button onClick={()=>dispatch(increment())}>decrement</button>
            <span>{counter}</span>
        <button onClick={()=>dispatch(decrement())}>increment</button>
        <button onClick={()=>dispatch(resetcounter())}>reset</button>

    </div>
  )
}

export default Contercmp