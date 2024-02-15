import { useCallback, useEffect, useMemo, useState } from "react";
import Child from "./Child";

const Example=()=>{
    const[name,setName]=useState("")
    const [num1,setNum1]=useState(0);
    const[num2,setNum2]=useState(0);
    const add=(num1,num2)=>{
        console.log("fun runnig");
        return parseInt(num1)+parseInt(num2);
    }

    // const ans=add(num1,num2);


    // const ans = useMemo(()=>{
    //     //fun
    //  return add(num1,num2);
    // },[num1,num2])
    
//     const abc = useCallback((e)=>{       //fun
//         setName(e.target.value);

//    })


    const ans = useCallback(()=>{       //fun
         add(num1,num2);
    },[])

    return(<>
    <h1>use memo example</h1>
    <input onChange={(e)=>setName(e.target.value)} value={name}></input>
    <input onChange={(e)=>setNum1(e.target.value)} value={num1}></input>
    <input onChange={(e)=>setNum2(e.target.value)} value={num2}></input>
    <h2>answer:{ans}</h2>
    {/* <Child handle={handle}/> */}
    {/* <Child/> */}
    </>)

}
export default Example;