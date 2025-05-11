import React, {Component} from 'react';
class Twoway extends Component
{
    constructor()
    {
        super()
        this.state={
            input:"enter value"
        }
    }
    handleInput=(event)=>
    {
        this.setState(
            {
            input:event.target.value
            }
        );
    };
    render()
    {
        return(
            <div>
                <h1>Two way Binding Example</h1>
                <input 
                type="text"
                value={this.state.input}
                onChange={this.handleInput}/>
                <h1>{this.state.input}</h1>
            </div>
        )
    }
}
export default Twoway;
