import React,{Component} from "react";
import Childcomp from "./Childcomp";
class Parentcompo extends Component
{
    handleClick=()=>{
        alert("Button Clicked in Child!");
    }
    render()
    {
        return(
            <div>
                <Childcomp handleClick={this.handleClick}/>
            </div>
        );
    }
}
export default Parentcompo;