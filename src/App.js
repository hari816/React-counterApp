import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = { 
    counters:[
        {id:1,value:1},
        {id:2,value:2},
        {id:3,value:0}
    ]
 }
 handleDelete = (id) =>{
     const counters =this.state.counters.filter(c=>c.id!==id);
     this.setState({counters})
 }

 handleReset= () =>{
    const counters= this.state.counters.map(c => {
         c.value=0;
         return c;
     });
     this.setState({counters});
 }
 handleIncrement = (counter) =>{
    const counters=[...this.state.counters];
    const index=counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({counters});
};


  render() {
    return (
      <div>
      <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length} />
      <main className="container">
      <Counters onReset={this.handleReset}
      counters={this.state.counters}
      onIncrement={this.handleIncrement}
      onDelete={this.handleDelete}
      />
      </main>
      </div>
    );
  }
}

export default App;
