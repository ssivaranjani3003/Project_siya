import React,{Component} from "react";
class Toogglemgs extends Component
{
    constructor()
    {
        super();
        this.state={
            isVisible: false
        }
    };
    togglemgs=()=>{
        this.setState(prevState=>(
        {
            isVisible : !prevState.isVisible
        }
    ))
    }
    render()
    {
        return(
            <div>
                <button onClick={this.togglemgs}>{this.state.isVisible ? 'HideComponent' : 'ShowComponent'}</button>
                {this.state.isVisible && <p>HI HOW ARE YOU></p>}
            </div>
        )
    }
}
export default Toogglemgs;
