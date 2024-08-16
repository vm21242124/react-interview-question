import { configureStore, createSlice } from "@reduxjs/toolkit";
const counterSlice=createSlice({
    name:"counter",
    initialState:0,
    reducers:{
        increment:(state)=>state=state+1,
        decrement:(state)=>state=state-1,
        resetcounter:(state)=>0
    }
})
//actions
export const {increment,decrement,resetcounter}=counterSlice.actions;

export const store=configureStore({
    reducer:{
       counter:counterSlice.reducer
    }
})