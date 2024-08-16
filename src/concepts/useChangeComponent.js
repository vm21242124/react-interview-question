import { useState, useEffect } from 'react';

function getValueFromLocalStorage(key,initialvalue){
  const storedValue = localStorage.getItem(key);
  if(storedValue){
    return JSON.parse(storedValue);
  }
  return initialvalue;
}

export function useLocalStorage(initialvalue) {
  const [value,setValue]=useState(initialvalue);
  useEffect(()=>{
    const storedValue=getValueFromLocalStorage("name",initialvalue);
    if(storedValue){
      setValue(storedValue);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("name",JSON.stringify(value));
  },[value])
  
  return [value,setValue];
}

export function useFetch(url){
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);
  useEffect(()=>{
    setLoading(true);
    fetch(url).then(async(res)=>{
      const d=await res.json();
      setData(d);
      setLoading(false);
    }).catch((e)=>{
      console.log(e);
      
      setError(true);
      setLoading(false);
    })
    setLoading(false);
  },[]);
  return [loading,error,data];
}