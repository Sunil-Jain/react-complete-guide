import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {

  state = {
    persons: [
      { id: '1', name:"Vinodbhai", age:47 },
      { id: '2', name:"Sanjuben", age:43 },
      { id: '3', name:"Sunil", age:25 },
      { id: '4', name:"Kunal", age:21 }
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    const currentState = this.state.showPersons;
    this.setState({
        showPersons: !currentState
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons
        .findIndex(person => person.id === id)

    const person = {
        ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
        persons: persons
    })
  }


  deletePersonHandler = personIndex => {
    // slice method copies the existing collection into a new collection.
    const persons = this.state.persons.slice();
    // Other way to copy an array is with spread operator. Please remember that this is ES6 operator.
    const persons2 = [...this.state.persons];
    // splice method for array type will remove the data at the index passed in as an argument.
    persons2.splice(personIndex, 1);
    this.setState({
        persons: persons2
    });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px'
    }

    let persons = null;

    if ( this.state.showPersons ) {
        persons = (
            <div>
                {
                    this.state.persons.map((person, index) => {
                        return <Person name = {person.name} 
                            age={person.age} 
                            click={this.deletePersonHandler.bind(this, index)}
                            key={person.id}
                            change={(event) => this.nameChangedHandler(event, person.id)} />
                    })
                }
            </div> 
        );

        style.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
