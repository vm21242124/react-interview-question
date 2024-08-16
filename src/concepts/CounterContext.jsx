import {  createContext, useState } from "react";
export const CounterContext=createContext();

export const CounterContextWrapper=({children})=>{
    const [val,setVal]=useState(0);
    const contextval={
        val,
        setVal
    }
    return (
        <CounterContext.Provider value={contextval}>
            {children}
        </CounterContext.Provider>
    )
}