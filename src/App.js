import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  render() {
    // 1) Every JSX code should return exactly one top level HTML element. This is by design. 
    // You can add as many nested HTML elements you want however there has to be exactly one root element.
    // 2) We cannot use reserved keywords like class in JSX code so JSX has defined alternative names for them.
    // For ex., class was turned into className.
    // 3) () with return method signifies that this return statement has multiple lines.
    // For single line, we can ommit () with return statement.
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <Person />
      </div>
    );

    // This representation is the exact same as above JSX representation.
    // React compiler converts the JSX code to code like below. 
    // We can use createElement method to create new HTML elements.
    // Three arguments are required for createElement method: 
    // 1) Name of the HTML element
    // 2) Optional properties section. You can provide it as null as well.
    // 3) Data for that HTML element.
    // return React.createElement("div", {className: 'App'}, React.createElement("h1", null, "Does This work Now?"));
  }
}

export default App;
