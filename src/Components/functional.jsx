import { Component } from "react";

function Display(){
    return(
        <div>
            <h1>Hello,good mrng</h1>
        </div>
    )
}
class Print extends Component{
    render(){
        return( 
            <div>
                <h1>Welcome to react</h1>
                <Display/>
            </div>
        );
    }
}

export default Print;