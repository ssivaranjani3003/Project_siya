import React from "react";
import Instancedemo from "./Instancedemo";
const Getinstance=()=>
{
    Instancedemo.get("/users").then(res=>console.log(res))
    return(
        <>
            <h3>Get Demo</h3>
        </>
    )
}
export default Getinstance;