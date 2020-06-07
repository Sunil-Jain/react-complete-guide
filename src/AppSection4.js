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

  deletePersonHandler = personIndex => {
    // There was an issue with our existing implementation to delete any person from persons array.
    // Javascript is referenced type scripting language. What this means is that when you assign a new variable 
    // to an existing collection, you are just giving a new reference to the existing memory blocks where the object
    // is stored. So when you perform manipulations on these new reference, you are actually updating the existing 
    // object only. To solve this issue, always copy the existing collection into a new collection using one of 
    // the following two ways.
    
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
      backgroundColor: 'white',
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
                            click={this.deletePersonHandler.bind(this, index)} />
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
