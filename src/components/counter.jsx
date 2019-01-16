import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        return  (
        <div>
            <span className={this.getBadgetClasses()}>{this.props.counter.value}</span>
           <button onClick={()=>this.props.onIncrement(this.props.counter)}>Increment</button>
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2" >Delete</button>  
           </div>
        );
    }
    getBadgetClasses(){
        let classes="badge m-2 badge-";
        classes += this.props.counter.value===0?"warning":"primary";
        return classes;
    }   
}
 
export default Counter ;