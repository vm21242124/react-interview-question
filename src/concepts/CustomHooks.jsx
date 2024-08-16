import { useRef } from "react";
import { useFetch, useLocalStorage } from "./useChangeComponent";

export const CostumHooksEg=()=>{
    const [value,setValue] =useLocalStorage("");
    const [Loading,err,data]=useFetch("https://jsonplaceholder.typicode.com/users");

    const inpRef =useRef(0);
    function focusInp(){
      inpRef.current.focus();
    }
    return(
      <>
        <input ref={inpRef} type="text" onChange={(e)=>setValue(e.target.value)} value={value}/>
        <p>my name is {value}</p>
        <button onClick={focusInp}> focus</button>   
        {Loading && <h1>loading</h1>}
        {data && data.map((item,key)=>(
            <div key={key}>{item.name}</div>
        ))}
      </>
    )
  }