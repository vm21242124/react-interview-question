import { useEffect, useState } from "react";
function f(setValue){
    let j=0;
    for(let i=0;i<10223232;i++){
        j=i;
    }
    setValue(j);
}
const HeavyComponent=()=>{
    const [value,setValue]=useState(0)
    useEffect(()=>{
        f(setValue);
    },[value])
    return (
        <div>Heavy component {value}</div>
    )
}
export default HeavyComponent;