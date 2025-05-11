import React,{Component} from 'react';
class Sample extends Component
{
    constructor()
    {
        super();
        this.state={
            name:"aaaa"
        }
    }
    render()
    {
        return(
            <div>
            <h1>My name is {this.state.name}</h1>
            </div>
        )
    }
} 
export default Sample;