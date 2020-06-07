import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {

  state = {
    persons: [
      { name:"Vinodbhai", age:47 },
      { name:"Sanjuben", age:43 },
      { name:"Sunil", age:25 },
      { name:"Kunal", age:21 }
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    const currentState = this.state.showPersons;
    this.setState({
        showPersons: !currentState
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px'
    }

    let persons = null;

    if (this.state.showPersons) {
        persons = (
            <div>
                {
                    this.state.persons.map(person => {
                        return <Person name = {person.name} age={person.age}/>
                    })
                }
            </div> 
        );
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Show persons</button>
        {persons}
      </div>
      
    );
  }
}

export default App;
