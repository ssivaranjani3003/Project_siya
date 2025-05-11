import { useState } from "react";
const Counterr=()=>
{
    const [count,setCount]=useState(0);
    const fun=()=>
    {
        setCount(count+1)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={fun}>click</button>
        </div>
    )
}
export default Counterr;