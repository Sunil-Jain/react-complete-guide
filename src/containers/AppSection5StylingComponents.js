import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/persons';
import Cockpit from '../components/cockpit/cockpit';

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
    // const persons = this.state.persons.slice();
    // Other way to copy an array is with spread operator. Please remember that this is ES6 operator.
    const persons2 = [...this.state.persons];
    // splice method for array type will remove the data at the index passed in as an argument.
    persons2.splice(personIndex, 1);
    this.setState({
        persons: persons2
    });
  }

  render() {
    let persons = null;

    if ( this.state.showPersons ) {
      persons = <Persons 
              persons={ this.state.persons }
              clicked={ this.deletePersonHandler }
              changed={ this.nameChangedHandler }/> 
    }

    return (
        <div className={classes.App}>
            <Cockpit
              title = { this.props.appTitle}
              showPersons={ this.state.showPersons }
              persons={ this.state.persons }
              click={ this.togglePersonsHandler } />
            {persons}
        </div>
    );
  }
}

export default App;
