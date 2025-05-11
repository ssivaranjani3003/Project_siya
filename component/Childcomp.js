import React from "react";
function Childcomp(props)
{
    return(
        <div>
        <button onClick ={props.handleClick}>Click me!</button>

        </div>
    );
}
export default Childcomp;