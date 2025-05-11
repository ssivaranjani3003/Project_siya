import React, {Component}from 'react';
class Changeobject extends Component{
    constructor()
    {
        super();
        this.state={
            name:"me!",
            food:"Icecream"
        };
    }
    changeName=()=>
    {
        this.setState({name:"Siya<3"});
    }
    render()
    {
        return(
            <div>
                <h1>I am {this.state.name} and I like {this.state.food}</h1>
                <button onClick={this.changeName}> Change Name !</button>
            </div>
        )
    }
}
export default Changeobject;