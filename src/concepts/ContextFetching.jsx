import React, { useContext } from 'react'
import { CounterContext } from './CounterContext'

function ContextFetching() {
    const {val,setVal}=useContext(CounterContext)
    function inc(){
        setVal(prev=>prev+1);
    }
    function dec(){
        setVal(prev=>prev-1);
    }
  return (
    <div>
        <button onClick={dec}>decrement</button>
        <span>{val}</span>
        <button onClick={inc}>increment</button>
    </div>
  )
}

export default ContextFetching