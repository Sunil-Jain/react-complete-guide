import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js'

const App = props => {
    const [personsState,setPersonsState] = useState({
        persons: [
          { name:"Vinodbhai", age:25 },
          { name:"Sanjuben", age:43 },
          { name:"Sunil", age:25 },
          { name:"Kunal", age:21 }
        ]
    });

    const [otherState,someOtherState] = useState('Some other state');

    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                { name:"Vinodbhai Mandot", age:25 },
                { name:"Sanjuben", age:43 },
                { name:"Sunil", age:35 },
                { name:"Kunal", age:21 }
            ]
        });
    }

    const switchOtherStateHandler = () => {
        someOtherState('This is some other state altered by another function');
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button onClick={switchNameHandler}>Switch Names</button>
        <button onClick={switchOtherStateHandler}>Switch other property</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} >Hobbies: IT</Person>
        <Person name={personsState.persons[3].name} age={personsState.persons[3].age}/>
        <p>{otherState}</p>
      </div>
    );
}

export default App;